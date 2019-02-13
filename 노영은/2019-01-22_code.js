//평범하게 2중 for문 사용
function solution1(heights) {
  const answer = [0];

  for(let i=heights.length-1; i>=0; i--) {
    for(let j=i-1; j>=0; j--) {
      if(heights[i]<heights[j]) {
        answer[i] = j+1;
        break;
      }

      if(j==0) answer[i] = 0;
    }
  }

  return answer;
}

//약간 복잡하게 풀이
function solution2(heights) {
  return heights.reverse().map((mv, mi) => Math.max(...heights.reduce((acc, rv, ri) => {
      if(ri>mi && rv>mv) acc.push(heights.length-ri);
      return acc;
    }, [0]))).reverse();
}