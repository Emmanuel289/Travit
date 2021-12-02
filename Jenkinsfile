pipeline {
    agent { any }
    stages {
        stage ('Build') {
            steps {
                echo 'Installing packages and dependencies'
                sh 'npm install'
            }
            steps {
                echo 'Compiling source code'
                sh 'npm start'
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
                sh 'npm build'
            }

            steps {
                echo 'Exiting application'
            }

        }
    }
}