const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U' ,'V', 'W', 'X', 'Y', 'Z'];

function solution(name) {
  let answer = 0, index = 0;
  const arr = name.split('')
  const moves = arr.map(char => getAlphaMove(char));
  for(let move of moves) {
    let leftMove = index, rightMove = index;
    if(moves.every(val => val === 0)) break;
    if(moves[index] !== 0) {
      answer += moves[index];
      moves[index] = 0;
    }
    if(moves.every(val => val === 0)) break;
    for(let i = 0; i < moves.length; i++) {
      if(leftMove==0) leftMove = moves.length;
      if(moves[--leftMove] !== 0) {
        index = leftMove;
        answer+=i+1;
        break;
      }
      if(moves[++rightMove] !== 0) {
        index = rightMove;
        answer+=i+1;
        break;
      }
    }
  }
  return answer;
}

function getAlphaMove(char) {
  const index = alphabets.indexOf(char);
  if(index <= 13) return index;
  return 26-index;
}

console.log(solution("AZAAZ"));