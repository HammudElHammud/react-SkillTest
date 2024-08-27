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

// node{
//     git branch: 'main', url: 'https://github.com/HammudElHammud/react-SkillTest.git'
//     stage('build'){
//             sh'echo "build in progress"'
//     }
// }


// pipeline {
//  agent {
//    label 'aws-angent'
//  }
//   stages {
//     stage('Build') {
//       steps {
//         script {
//           try {
//             sh 'echo "This is build from Jenkins"'
//           } catch (Exception e) {
//             sh 'echo "Exception occurred"'
//             error("Build failed: ${e.message}")
//           }
//         }
//       }
//     }
//     stage('Test') {
//       steps {
//         script {
//           if (env.BRANCH_NAME == "deploy") {
//             sh 'echo "This is deploy"'
//           } else {
//             sh 'echo "This is main branch"'
//           }
//         }
//       }
//     }
//   }
// }


pipeline{
    agent any
    stages{
        stage('build'){
            steps{
                script{
                    sh 'docker build -t react-app .'
                }
            }
        }
        stage('push'){
            steps{
                script{
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'Password', usernameVariable: 'Username')]) {
                    sh 'docker login --username $Username --password $Password'
                    sh 'docker tag react-app $Username/react-app'
                    sh 'docker push $Username/react-app'
                    }
                }
            }
        }
        stage('deploy'){
            steps{
                script{
                    withAWS(credentials: 'aws-cli', region: 'eu-central-1') {
                    sh 'aws eks update-kubeconfig --region eu-central-1 --name eks'
                    sh 'kubectl apply -f ./k8s/deployment.yaml'
                    }
                }
            }
        }
    }
}
// pipeline {
//     agent {
//         docker {
//             image 'docker:20.10.7' // Use a specific Docker image with Docker installed
//             args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket for Docker-in-Docker
//         }
//     }
//     stages {
//         stage('build') {
//             steps {
//                 script {
//                     sh 'docker --version' // Verify Docker is available
//                     sh 'docker build -t react-app .'
//                 }
//             }
//         }
//         stage('push') {
//             steps {
//                 script {
//                     withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'Password', usernameVariable: 'Username')]) {
//                         sh 'docker login --username $Username --password $Password'
//                         sh 'docker tag react-app $Username/react-app'
//                         sh 'docker push $Username/react-app'
//                     }
//                 }
//             }
//         }
//         stage('deploy') {
//             steps {
//                 script {
//                     withAWS(credentials: 'aws-cli', region: 'eu-central-1') {
//                         sh 'aws eks update-kubeconfig --region eu-central-1 --name eks'
//                         sh 'kubectl apply -f ./k8s/deployment.yaml'
//                     }
//                 }
//             }
//         }
//     }
// }
