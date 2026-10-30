pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def status = 0

                    withCredentials([
                        string(credentialsId: 'BASE_URL', variable: 'BASE_URL'),
                        string(credentialsId: 'EMAIL', variable: 'EMAIL'),
                        string(credentialsId: 'PASSWORD', variable: 'PASSWORD')
                    ]) {
                        status = bat(script: 'npx playwright test', returnStatus: true)
                    }

                    if (status != 0) {
                        echo "Tests failed, but continuing to generate reports..."
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Generating HTML reports...'

            // Runs safely because a workspace now exists from a successful checkout
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true,
                linkRelative: false
            ])
        }
    }
}