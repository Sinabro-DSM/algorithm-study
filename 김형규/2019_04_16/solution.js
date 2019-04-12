function solution(genres, plays) {
  let answer = [],
    order = [];
  const store = {};
  genres.forEach((val, i) => {
    if (!!store[val]) {
      store[val].musics.push({
        key: i,
        play: plays[i]
      });
      store[val].playTime += plays[i];
    } else {
      store[val] = {};
      store[val].musics = [
        {
          key: i,
          play: plays[i]
        }
      ];
      store[val].playTime = plays[i];
    }
  });
  for (let i in store) {
    order.push({
      key: i,
      playTime: store[i].playTime
    });
  }

  order
    .sort((prev, now) => now.playTime - prev.playTime)
    .map(({ key }) => key)
    .forEach(key => {
      answer.push(
        ...store[key].musics
          .sort((a, b) => b.play - a.play)
          .slice(0, 2)
          .map(val => val.key)
      );
    });
  console.log(answer);
  return answer;
}

solution(['a', 'b', 'b', 'c', 'd', 'e'], [1, 2, 2, 1, 5, 6]);
