pipeline{
 options{
  disableConcurrentBuilds()
        }
 agent{
  docker{
   image 'node:6-alpine'
   args '-p 3000:3000'
        }
      } 
 stages{
  stage('Build'){
    steps{
     sh 'npm install'
     sh 'npm run build' 
         }
        }
  stage('Publish'){
   agent any
    when{
     branch 'master'
        }
    steps{
     sh 'ls'
         }
      }
   }
}
