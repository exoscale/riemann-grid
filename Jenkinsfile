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
        gitPbuilder('xenial', false, '../build-area-xenial')
        gitPbuilder('bionic', false, '../build-area-bionic')
      }
    }
    stage('upload debian packages') {
      aptlyBranchUpload('xenial', 'main', 'build-area-xenial/*.deb')
      aptlyBranchUpload('bionic', 'main', 'build-area-bionic/*.deb')
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
    docker.withRegistry("https://${EXOSCALE_DOCKER_REGISTRY}") {
      def clojureContainer = docker.image("${EXOSCALE_DOCKER_REGISTRY}/exoscale/clojure:latest")
      clojureContainer.pull()
      clojureContainer.inside('-u root --net=host') {
        sh 'lein clean'
        sh 'lein test'
        sh 'lein uberjar'
      }
    }
  }
}
