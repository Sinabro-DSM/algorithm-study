function solution(genres, plays) {
  const answer = [];

  const obj = genres.reduce((acc, v, i) => {
    if(acc[v] === undefined)
      acc[v] = [plays[i], i];
    else {
      acc[v].push(i);
      acc[v][0]+=plays[i];
    }
    return acc;
  }, {});

  const values = Object.values(obj);
  values.sort((a, b) => b[0]-a[0]);

  plays.push(0);
  const playLastIndex = plays.length-1;

  values.forEach(value => {
    let maxOne=playLastIndex, maxTwo=playLastIndex;

    value.shift();
    value.forEach(v => {
      if(plays[v]>plays[maxOne]){
        maxTwo = maxOne;
        maxOne = v;
      }
      else if(plays[v]>plays[maxTwo]) maxTwo = v;
    });

    if(maxTwo === playLastIndex) answer.push(maxOne);
    else answer.push(maxOne, maxTwo);
  });

  return answer;
}