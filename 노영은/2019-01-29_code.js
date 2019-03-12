function solution(numbers) {
  numbers.sort((a, b) => {
    const strA = a.toString(),
    strB = b.toString();

    const aFirstStr = strA.concat(strB),
    bFirstStr = strB.concat(strA);

    a = parseInt(aFirstStr);
    b = parseInt(bFirstStr);

    if(a<b) return 1;
    else if(a>b) return -1;
    else return 0;
  });

  for(let i=0, leng=numbers.length; i<leng-1; i++)
    if(numbers[0]==0) numbers.shift();
    else break;
  return numbers.join('');
}