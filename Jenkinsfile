@Library('jenkins-pipeline') _

node {
  // Wipe the workspace so we are building completely clean
  cleanWs()

  try {
    dir('src') {
      stage('checkout code') {
        checkout scm
      }
      lein()
      build()
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
    throw err
  }
  finally {
    currentBuild.result = 'SUCCESS'
  }
}

def lein() {
  stage('lein') {
    docker.withRegistry('https://infra-img001.gv2.p.exoscale.net') {
      def clojureContainer = docker.image('infra-img001.gv2.p.exoscale.net/exoscale/clojure:latest')
      clojureContainer.inside('-u root --net=host') {
        sh 'lein pom'
      }
    }
  }
}

def build() {
  stage('build') {
    docker.withRegistry('https://infra-img001.gv2.p.exoscale.net') {
      def mavenContainer = docker.image('infra-img001.gv2.p.exoscale.net/exoscale/maven:latest')
      mavenContainer.inside('-v /home/exec/.m2:/root/.m2 -u root --net=host') {
        sh 'mvn -e install'
      }
    }
  }
}
