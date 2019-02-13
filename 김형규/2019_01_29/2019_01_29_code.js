function solution(numbers) {
    const answer = numbers.sort((a, b) => parseInt(b+''+a)-parseInt(a+''+b)).join('');
    if(answer[0] === '0')
        return '0';
    return answer;
}

console.log(solution([3, 30, 34, 5, 9]));