function solution(n) {
    let Arr = [1,2,3];

    for(let i=3;i<n;i++){
        Arr[i]=(Arr[i-2]+Arr[i-1])%1000000007;
    }
    return Arr[n-1];
}