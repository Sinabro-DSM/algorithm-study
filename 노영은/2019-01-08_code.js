// Map 사용
function solution1(clothes) {
  const species = new Map();

  for (let cloth of clothes) {
    if (!species.has(cloth[1]))
      species.set(cloth[1], 1);
    else
      species.set(cloth[1], species.get(cloth[1]) + 1);
  }

  let num = 1;

  species.forEach((value) => num *= value+1);

  return num-1;
}

// Object와 reduce 함수 사용
function solution2(clothes) {
  const species = clothes.reduce((acc, value) => {
    if(!acc[value[1]])
      acc[value[1]] = 1;
    else 
      acc[value[1]] = acc[value[1]] + 1;
    return acc;
  }, {});

  return Object.values(species).reduce((acc, value) => acc *= value+1, 1)-1;
}