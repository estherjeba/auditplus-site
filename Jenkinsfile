pipeline {
  environment {
    VERSION = '0.0.1'
    ECRURL = 'http://980284290314.dkr.ecr.ap-south-1.amazonaws.com'
    ECRCRED = 'ecr:ap-south-1:b994d093-c000-4991-bbc7-906d7f11abc0'
    PROJECT = 'esther-auditplus-site'
    IMAGE = 'esther-auditplus-site'
  }
  options {
    disableConcurrentBuilds ()
  }
  agent any
  tools { nodejs "node" }
  stages {
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Building image') {
      steps{
        script {
          docker.build IMAGE
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( ECRURL,ECRCRED ) {
            docker.image(IMAGE).push(VERSION)
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $IMAGE"
      }
    }
  }
}

