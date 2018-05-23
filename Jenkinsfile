@Library('jenkins-pipeline') _

node {
  cleanWs()

  try {
    dir('src') {
      stage('SCM') {
        checkout scm
      }
      updateGithubCommitStatus('PENDING', "${env.WORKSPACE}/src")
      stage('Build and Upload') {
        docker()
      }
    }
  } catch (err) {
    currentBuild.result = 'FAILURE'
    throw err
  } finally {
    if (!currentBuild.result) {
      currentBuild.result = 'SUCCESS'
    }
    updateGithubCommitStatus(currentBuild.result, "${env.WORKSPACE}/src")
    cleanWs cleanWhenFailure: false
  }
}

def docker() {
  tag = "master"
  docker.withRegistry('https://registry.internal.exoscale.ch') {
    def image = docker.build("registry.internal.exoscale.ch/exoscale/graphq:" + tag, "--network host .")
    image.push()
  }
}
