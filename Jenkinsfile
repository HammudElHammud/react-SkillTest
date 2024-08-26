// node{
//   git branch: 'main' url: 'https://github.com/HammudElHammud/react-SkillTest.git'
//   stage('build'){
//
//     sh'echo " this is build from jenkins" '
//
//   }
//   stage('test'){
//       if(env.BRANCH_NAME === "deploy"){
//         sh'echo "this is deploy"'
//       }else {
//        sh'this is main branch'
//       }
//   }
// }

pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          try {
            sh 'echo "This is build from Jenkins"'
          } catch (Exception e) {
            sh 'echo "Exception occurred"'
            error("Build failed: ${e.message}")
          }
        }
      }
    }
    stage('Test') {
      steps {
        script {
          if (env.BRANCH_NAME == "deploy") {
            sh 'echo "This is deploy"'
          } else {
            sh 'echo "This is main branch"'
          }
        }
      }
    }
  }
}
