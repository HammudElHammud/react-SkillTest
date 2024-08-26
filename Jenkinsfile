node{
  git branch: 'main' url: 'https://github.com/HammudElHammud/react-SkillTest.git'
  stage('build'){
    try{
    sh'echo " this is build from jenkins" '
    } catch (Exception e){
     sh'echo "excepation "'
     throw e
    }
  }
  stage('test'){
      if(env.BRANCH_NAME === "deploy"){
        sh'echo "this is deploy"'
      }else {
       sh'this is main branch'
      }
  }
}