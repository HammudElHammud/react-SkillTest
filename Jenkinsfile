
// pipeline{
//     agent any
//     stages{
//         stage('build'){
//             steps{
//                 script{
//                     sh 'docker build -t react-app .'
//                 }
//             }
//         }
//         stage('push'){
//             steps{
//                 script{
//                     withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'Password', usernameVariable: 'Username')]) {
//                     sh 'docker login --username $Username --password $Password'
//                     sh 'docker tag react-app $Username/react-app'
//                     sh 'docker push $Username/react-app'
//                     }
//                 }
//             }
//         }
//         stage('deploy'){
//             steps{
//                 script{
//                     withAWS(credentials: 'aws-cli', region: 'eu-central-1') {
//                     sh 'aws eks update-kubeconfig --region eu-central-1 --name eks'
//                     sh 'kubectl apply -f ./k8s/deployment.yaml'
//                     }
//                 }
//             }
//         }
//     }
// }