function solution(progresses, speeds) {
  var answer = [];
  let arr = [];
  
  while(progresses.length){
      let date = parseInt((100-progresses[0])/speeds[0]);
      if((100-progresses[0])%speeds[0]) date++;
      arr.push(progresses.shift());
      speeds.shift();
  
      if(progresses.length){
          while(true){
            if(speeds[0]*date - (100-progresses[0]) >= 0){
              arr.push(progresses.shift());
              speeds.shift();
              continue;
            }
              break;
          }
      }  
      answer.push(arr.length);
      arr = [];
  }
  
  return answer;
}