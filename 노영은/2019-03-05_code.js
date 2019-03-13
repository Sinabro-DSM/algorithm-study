function solution(skill, skill_trees) {
  let answer=0;

  for(let i of skill_trees) {
    const array = [];
    let flag = true;

    for(let j=0, leng=skill.length; j<leng; j++) {
      let index = i.indexOf(skill[j]);
      
      if(index == -1)
        index = Infinity;
      
      array.push(index);

      if(array[array.length-2]>array[array.length-1]) {
        flag = false;
        break;
      }
    }

    if(flag) answer++;
  }
  
  return answer;
}