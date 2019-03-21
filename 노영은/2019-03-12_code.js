function solution(tickets) {
  const answer = [];

  const obj = tickets.reduce((acc, v) => {
    if(acc[v[0]]==undefined)
      acc[v[0]] = [v[1]];
    else
      acc[v[0]].push(v[1]);

    return acc;
  }, {});

  f('ICN', 0);

  return answer;

  function f(ticket, num) {
    if(obj[ticket]==undefined || obj[ticket].length==0) {
      if(num==tickets.length) 

        answer.unshift(ticket);
      return;
    } else {
      obj[ticket].sort((a, b) => a.localeCompare(b));

      for(let i=0, leng=obj[ticket].length; i<leng; i++) {
        const shifted = obj[ticket].splice(i, 1)[0]
        f(shifted, num+1);

        if(answer.length!=0) {
          answer.unshift(ticket);
          break;
        } else {
          obj[ticket].splice(i, 0, shifted);
        }
      }
    }
  }
}