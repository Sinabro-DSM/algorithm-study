function solution(tickets) {
  const answer = [], firstTicket = getRegion('ICN', tickets);
  console.log(firstTicket)
  answer.push(firstTicket[0]);
  // tickets.splice(firstTicket[1], 1);
//   for(let i = 0; i < tickets.length; i++) {
//     let ticket = getRegion(answer[answer.length-1], tickets)[0];
//     answer.push(ticket[0]);
//     tickets.splice(ticket[1], 1);
//   }
  return answer;
}

function getRegion(destination, tickets) {
    const candidates = [];
    tickets.forEach(ticket => {
      if(ticket[0] === destination) {
        candidates.push(ticket[1]);
      }
    });
    return candidates.reduce((accumulator, curValue, curIndex) => {
        if(accumulator[0] > curValue) return [curValue, curIndex];
        return accumulator;
    }, [candidates[0], 0]);
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));