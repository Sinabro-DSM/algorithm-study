function solution(progresses, speeds) {
    let answer = [];
    const restDays = progresses.map((progress, i) => Math.ceil((100-progress)/speeds[i]))
    let a = restDays.reduce((prev, cur) => {
        if(prev[prev.length-1].val >= cur) {
            prev[prev.length-1].count += 1;
        } else {
            prev.push({val: cur, count: 1})
        }
        return prev
    }, [{val: restDays[0], count: 0}])
    answer = a.map(val => val.count)
    return answer;
}

console.log(solution([93, 30, 55, 60, 40, 65], [1, 30, 5 , 10, 60, 7]))