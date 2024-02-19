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
stage('Send Email to QA') {
    steps {
        emailext (
            to: 'projectangulartest@gmail.com',
            subject: "Deployment Ready for QA Approval",
            body: "The deployment is ready for QA approval. Please review and provide your feedback.<br> URL de build: ${env.BUILD_URL}",
        )
    }
}

        stage('QA Approval') {
            steps {
                input "QA approval required. Proceed with deployment?"
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
                         mail bcc: 'muhammad.aslam@speridian.com', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Build Successfull: Project name -> ${env.JOB_NAME}", to: "abubakarmunir97@gmail.com";  

        }
        failure {
            echo 'Build or Publish failed!'
                                     mail bcc: 'muhammad.aslam@speridian.com', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Build Failed: Project name -> ${env.JOB_NAME}", to: "abubakarmunir97@gmail.com";  
        }
    }
}
