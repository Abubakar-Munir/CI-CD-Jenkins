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
                    def xamppHtdocs = 'C:\\xampp\\htdocs'
            def backupFolder = 'D:\\BackupsCICD\\AngularApp'
            def distFolder = 'dist'
            
            def timestamp = new Date().format('yyyyMMdd_HHmmss')
            def backupPath = "${backupFolder}\\${timestamp}"
            bat "mkdir \"${backupPath}\""
            
            bat "xcopy /s /y ${xamppHtdocs} ${backupPath}"
            bat "del /q \"${xamppHtdocs}\\*.*\""
            bat "xcopy /s /y ${distFolder} ${xamppHtdocs}\\"

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
