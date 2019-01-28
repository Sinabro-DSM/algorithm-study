function solution(n) {
    let answer = 0;
    let fiboSequence = [1,2,]

    for(let i = 2; n>2 && i<n; i++){
        fiboSequence[i] = fiboSequence[i-2] + fiboSequence[i-1];
    }

    answer = fiboSequence[n-1] % 1000000007;

    return answer;
}