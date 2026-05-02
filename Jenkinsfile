pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo ' Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo ' Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo ' Running tests...'
                sh 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build') {
            steps {
                echo '  Building React app for production...'
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                echo ' Archiving build output...'
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('Deploy') {
            when { branch 'main' }
            steps {
                echo ' Deploying...'
                // Replace with your deploy command:
                // sh 'scp -r build/* user@yourserver:/var/www/html/'
                echo 'Add your deploy command here.'
            }
        }
    }

    post {
        success { echo ' Pipeline completed successfully!' }
        failure { echo ' Pipeline failed.' }
        always  { cleanWs() }
    }
}
