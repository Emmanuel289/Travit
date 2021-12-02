pipeline {
    agent { docker { image 'node:12-stretch' } }
    stages {
        stage('Build') {
            steps {
                echo 'Building source files in Travit ...'
                sh 'ng build'
            }
            steps {
                echo 'Running build artifact ...'
                sh 'ng serve --open'
            }
        }
        stage('Test'){
            steps {
                echo 'Running all tests...'
                sh 'ng test'
            }
        }
        stage('Deliver'){
            steps {
                echo 'Deploying Travit to production'
            }
        }
    }
}
