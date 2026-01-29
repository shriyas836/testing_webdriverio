

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

        // stage('Run Automation Tests') {
        //     steps {
        //         sh 'docker run --rm --platform linux/arm64 wdio-test'
        //   }
        // }
        stage('Run Automation Tests') {
    steps {
        sh '''
        docker run --rm \
          -e DOCKER=true \
          -e CHROME_BIN=/usr/bin/chromium \
          -e CHROMEDRIVER_BIN=/usr/bin/chromedriver \
          -e WDIO_MAX_INSTANCES=1 \
          wdio-test
        '''
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




    
    
    

