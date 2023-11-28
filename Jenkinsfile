pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Install Dependencies') {
        //     steps {
        //         script {
        //             sh 'npm install'
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                script {
                    sh 'ng build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'ng test'
                }
            }
        }

      
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }

        failure {
            echo 'Build or deployment failed. Check the Jenkins console output for more details.'
        }
    }
}
