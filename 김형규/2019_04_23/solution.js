function compare(str1, str2) {
  let diff = 0;
  for (let i in str1) {
    if (str1[i] !== str2[i]) diff++;
  }
  return diff === 1;
}

function solution(begin, target, words) {
  var answer = 0;
  const stack = [begin];
  const result = [];
  const visited = {};
  let current;
  visited[begin] = true;
  while (stack.length) {
    current = stack.pop();
    if (current === target) {
      answer = 1;
      break;
    }
    result.push(current);

    words.forEach(val => {
      if (!visited[val] && compare(current, val)) {
        visited[val] = true;
        stack.push(val);
      }
    });
  }
  return answer ? result.length : 0;
}

solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);