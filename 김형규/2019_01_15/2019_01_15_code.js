function solution(n) {
    let arr = [1, 1, 2, 3];
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1]%1000000007 + arr[i - 2]%1000000007;
    }
    return arr[n]%1000000007;
}