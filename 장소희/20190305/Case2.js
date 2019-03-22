function solution(skill, skill_trees) {
  let answer=0;
  for(let i in skill_trees){
    let skill_index =0;
    let flag = false;
    for(let j in skill_trees[i]){
      if(skill.indexOf(skill_trees[i][j])>=0){
        if(skill[skill_index]!==skill_trees[i][j]){
          break;
        }   
        skill_index++; 
        console.log(skill_trees[i][j+1]);
        if(skill_index>=skill.length || !skill_trees[i][j+1]){
          flag = true;
          break;
        }
     }
    }
    if(flag) answer++;
  }  return answer;

  
}