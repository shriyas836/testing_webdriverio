// pipeline {
//     agent any

//     tools {
//         nodejs 'Node20'
//     }

//     parameters {
//         choice(
//             name: 'BROWSER',
//             choices: ['chrome', 'firefox'],
//             description: 'Select browser'
//         )
//         string(
//             name: 'BASE_URL',
//             defaultValue: 'https://rahulshettyacademy.com',
//             description: 'Application URL'
//         )
//     }

//     environment {
//         BROWSER = "${params.BROWSER}"
//         BASE_URL = "${params.BASE_URL}"
//     }

//     stages {

//         stage('Checkout Code') {
//             steps {
//                 git branch: 'main',
//                     url: 'https://github.com/shriyas836/testing_webdriverio.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh '''
//                     node -v
//                     npm -v
//                     npm install
//                 '''
//             }
//         }

//         stage('Run WDIO Tests') {
//             steps {
//                 sh '''
//                     echo "Browser: $BROWSER"
//                     echo "URL: $BASE_URL"
//                     npx wdio run wdio.conf.js
//                 '''
//             }
//         }
//     }

//     post {
//         always {
//             allure includeProperties: false,
//                    jdk: '',
//                    results: [[path: 'allure-results']]
//         }
//     }
// }

pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'firefox'],
            description: 'Select browser'
        )
        string(
            name: 'BASE_URL',
            defaultValue: 'https://rahulshettyacademy.com',
            description: 'Application URL'
        )
    }

    environment {
        BROWSER = "${params.BROWSER}"
        BASE_URL = "${params.BASE_URL}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/shriyas836/testing_webdriverio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t wdio-tests .'

            }
        }

        stage('Run WDIO Tests in Docker') {
            steps {
                sh '''
                echo "Browser: $BROWSER"
                echo "URL: $BASE_URL"

                /usr/local/bin/docker run --rm \
                -e BROWSER=$BROWSER \
                -e BASE_URL=$BASE_URL \
                -v $WORKSPACE/allure-results:/app/allure-results \
                wdio-tests
                '''
            }
        }
    }

    post {
        always {
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
        }
    }
}

