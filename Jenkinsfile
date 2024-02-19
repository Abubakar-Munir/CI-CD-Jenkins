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
                               mail bcc: 'muhammad.aslam@speridian.com', 
                                  body: '''<html>
                      <head>
                        <style>
                          body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            color: #333;
                          }
                          .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #fff;
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                          }
                          h1 {
                            color: #007bff;
                          }
                          p {
                            margin-bottom: 20px;
                          }
                          .button {
                            display: inline-block;
                            background-color: #007bff;
                            color: #fff;
                            text-decoration: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                          }
                        </style>
                      </head>
                      <body>
                        <div class="container">
                          <h1>🚀 Deployment Ready for QA Approval 🚀</h1>
                          <p>Hello QA Team,</p>
                          <p>We're excited to announce that the latest deployment is now ready for your review and approval. Your feedback is crucial in ensuring the quality and reliability of our software.</p>
                          <p>Please take a moment to review the deployment and provide your valuable feedback.</p>
                          <p><strong>Deployment Details:</strong></p>
                          <ul>
                            <li>URL: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
                            <li>Branch: testBranch</li>
                            <li>Build Number: 25</li>
                          </ul>
                          <p>If you encounter any issues or have suggestions for improvement, feel free to reach out to us.</p>
                          <p>Thank you for your attention to this matter.</p>
                          <p>Best regards,<br/>Your Name</p>
                          <p><a class="button" href="${env.BUILD_URL}">View Deployment</a></p>
                        </div>
                      </body>
                      </html>''',
                                 cc: '', charset: 'UTF-8', from: '', 
                                 mimeType: 'text/html', replyTo: '',
                                 subject: "Deployment Ready for QA Approval ${env.JOB_NAME}",
                                 to: "projectangulartest@gmail.com"; 
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
