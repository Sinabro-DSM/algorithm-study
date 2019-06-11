let flag = false;

function isVaildWords(n: number, words: string[]): [number, number] {
  const answer: [number, number] = [0, 0];
  for (let word of words) {
    const index = words.indexOf(word);
    if (index !== 0) {
      const prev = words[index - 1];
      const isValid = prev[prev.length - 1] === word[0];
      if (!isValid) {
        answer[0] = Math.ceil(index / n);
        answer[1] = (index % n) + 1;
        break;
      }
    }
  }
  return answer;
}

function isModerateWords(n: number, words: string[]): [number, number] {
  const answer: [number, number] = [0, 0];
  for (let word of words) {
    if (word.length < 2 || words.length > 50) {
      const index = words.indexOf(word);
      answer[0] = Math.ceil(index / n);
      answer[1] = (index % n) + 1;
      flag = true;
      break;
    }
  }
  return answer;
}

function solution(n: number, words: string[]): [number, number] {
  for(let [i, word] of words.entries()) {
    if (words.indexOf(word) < i) {
      return [(i % n) + 1, Math.ceil(i / n)]
    }
  }

  const moderateAnswer: [number, number] = isModerateWords(n, words);
  if (flag) return moderateAnswer;

  return isVaildWords(n, words);
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));