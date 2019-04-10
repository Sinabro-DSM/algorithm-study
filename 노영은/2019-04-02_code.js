function solution(progresses, speeds) {
  const consumDate = [];
  const answer = [];

  for (let i = 0; i < progresses.length; i++) {
    const rest = 100 - progresses[i];
    consumDate.push((rest % speeds[i] != 0) ? parseInt(rest / speeds[i]) + 1 : rest / speeds[i]);
  }

  let num = 1;

  for (let i = 0; i < consumDate.length; i++) {
    if (i == consumDate.length - 1) {
      answer.push(answer.pop() + 1);
    } else {
      for (let j = i + 1; j < consumDate.length; j++) {
        if (consumDate[i] >= consumDate[j]) {
          if (j == consumDate.length - 1) {
            i = j - 1;
            answer.push(num);
            break;
          }

          num++;
        } else {
          answer.push(num);
          num = 1;
          i = j - 1;

          if (j == consumDate.length - 1)
            answer.push(0);

          break;
        }
      }
    }
  }

  return answer;
}