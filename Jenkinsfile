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
            echo 'Build and Publish successful!'
            emailext body: 'Build and Publish successful!',
                     subject: 'Jenkins Pipeline Success',
                     to: 'abubakarmunir97@gmail.com'
        }
        failure {
            echo 'Build or Publish failed!'
            emailext body: 'Build or Publish failed!',
                     subject: 'Jenkins Pipeline Failure',
                     to:'projectangulartest@gmail.com'
        }
    }
}
