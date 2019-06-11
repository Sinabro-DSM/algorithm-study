function isVaildWords(n, words) {
  var answer = [0, 0];
  for (let word of words) {
    const index = words.indexOf(word);
    if (index !== 0) {
      const prev = words[index - 1];
      const isValid = prev[prev.length - 1] === word[0];
      if (!isValid) {
        answer[0] = index % n + 1;
        answer[1] = Math.ceil((index + 1) / n);
        break;
      }
    }
  }
  return answer;
}
function solution(n, words) {
  for (let [i, word] of words.entries()) {
    if (words.indexOf(word) < i) {
      return [i % n + 1, Math.ceil((i + 1) / n)];
    }
  }
  return isVaildWords(n, words);
}
console.log(
  solution(3 , ["tank", "kick", "know", "wheel", "land", "dream", "mother", "bot", "tank"] )
);
