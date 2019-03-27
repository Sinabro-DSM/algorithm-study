function solution(participant, completion) {
  return Object.keys(participant.reduce((acc, v, i) => {
    if(acc[v]!==undefined) acc[v]++;
    else acc[v]=1;

    if(acc[completion[i]]!==undefined) acc[completion[i]]--;
    else acc[completion[i]]=-1;

    if(acc[v]==0) delete acc[v];
    if(acc[completion[i]]==0) delete acc[completion[i]];

    console.log('acc: ', acc);

    return acc;
  }, {}))[0];
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));