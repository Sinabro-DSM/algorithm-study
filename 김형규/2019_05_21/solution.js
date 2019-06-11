function solution(n) {
  const num1 = getNumberOf1(n.toString(2));
  while(1) {
    const num2 = getNumberOf1((++n).toString(2));
    if(num1 === num2) return n;
  }
}

function getNumberOf1(binaryStr) {
  return binaryStr.split("").filter(num => num === '1').length;
}

console.log(solution(15));