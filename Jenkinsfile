pipeline {
    agent {
        docker {
            image 'node:12-stretch'
            args '-p 3000:3000'
        }
    }
    stages {
        stage ('Build') {
            steps {
                echo 'Installing packages and dependencies'
                sh 'npm install'
            }
        }
        stage ('Test') {
            steps {
                echo ' Running unit tests'
                sh 'npm run-script test'
            }
        }
        stage ('Deliver') {
            steps {
                echo 'Compiling static bundle'
                sh 'npm run-script build'
                echo 'Compiling source code'
                sh 'npm start'
            }

        }
    }
}