pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'ng build'
                }
            }
        }

        stage('Copy to XAMPP') {
            steps {
                script {
                    def xamppHtdocs = '\\\\172.16.10.240\\jenkins'
                    def distFolder = 'dist'
                    
                    bat "xcopy /s /y ${distFolder} ${xamppHtdocs}\\"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Publish successful!'
            emailext body: 'Build and Publish successful!',
                     subject: 'Jenkins Pipeline Success',
                     to: 'your-email@example.com'
        }
        failure {
            echo 'Build or Publish failed!'
            emailext body: 'Build or Publish failed!',
                     subject: 'Jenkins Pipeline Failure',
                     to: 'your-email@example.com'
        }
    }
}
