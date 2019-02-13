function solution(n) {
    var answer = 0;
    let sqr = [1,1];
    
    for(let i = 2; i < n+1; i++){
        sqr[i] = (sqr[i-1] + sqr[i-2])%1000000007
    }
    answer = sqr[n]
    return answer;
}