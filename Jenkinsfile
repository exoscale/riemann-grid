@Library('jenkins-pipeline') _


node {
  // Wipe the workspace so we are building completely clean
  cleanWs()

  try {
    dir('src') {
      stage('checkout code') {
        checkout scm
      }
      updateGithubCommitStatus('PENDING', "${env.WORKSPACE}/src")
      uberjar()
      stage('build deb package') {
        gitPbuilder('xenial')
      }
    }
    stage('upload debian packages') {
      aptlyBranchUpload('xenial', 'main', 'build-area/*.deb')
    }
  }
  catch (err) {
    currentBuild.result = 'FAILURE'
    updateGithubCommitStatus('FAILURE', "${env.WORKSPACE}/src")
    throw err
  }
  finally {
    if (currentBuild.result != 'FAILURE') {
      updateGithubCommitStatus('SUCCESS', "${env.WORKSPACE}/src")
    }
    cleanWs cleanWhenFailure: false
  }
}

def uberjar() {
  stage('uberjar') {
    def clojureContainer = docker.image('exoscale/clojure:latest')
    clojureContainer.inside('-u root') {
      sh 'lein clean'
      sh 'lein test'
      sh 'lein uberjar'
    }
  }
}
