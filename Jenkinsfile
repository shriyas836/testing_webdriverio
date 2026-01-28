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

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Docker Check') {
            steps {
                sh '''
                    echo "Checking Docker availability..."
                    which docker
                    docker --version
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t wdio-test .'
            }
        }

        stage('Run Automation Tests') {
            steps {
                sh 'docker run --rm wdio-test'
            }
        }
    }

    post {
        success {
            echo '✅ Tests executed successfully in Docker'
        }
        failure {
            echo '❌ Tests failed — check logs'
        }
    }
}



    
    
    
