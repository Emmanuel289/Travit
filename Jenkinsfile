pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                echo 'Building source files in Travit ...'
                sh 'ng build'
            }
            steps {
                echo 'Running build artifact ...'
                sh 'ng serve --open'
            }
        }
        stage('test'){
            steps {
                echo 'Running all tests...'
                sh 'ng test'
            }
        }
        stage('deploy'){
            steps {
                echo 'Deploying Travit to production'
            }
        }
    }
}
