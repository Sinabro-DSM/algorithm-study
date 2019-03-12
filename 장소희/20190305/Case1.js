function solution(skill, skill_trees){
  let answer = 0;

  for(let i in skill_trees){
    let str = "";
    for(let j in skill_trees[i]){
      if(skill.indexOf(skill_trees[i][j])>=0){
        str+=skill_trees[i][j];
      }
    }
    if(str!=="" && skill.indexOf(str)>=0){
      let flag = false;
      for(let i in str){
        if(str[i]!==skill[i]) break;
        flag = true;
      }
      if(flag) answer++;
    }
  }
  return answer;
}