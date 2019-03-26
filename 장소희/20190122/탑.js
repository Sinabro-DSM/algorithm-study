function solution(heights) {
  var answer = [0,];

  let higherTop = 0;
  for(let n=1; n<(heights.length); n++){
      answer[n] = false;
      for(let i=n-1; i>=0; i--){
          if(heights[i]>heights[n]){
              answer[n] = i+1;
              break;
          }
      }
      if(!answer[n]) answer[n] = 0;
  }
  return answer;
}