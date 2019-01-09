function solution(s) {
    let arr = new Array;
    let j=-1;

    for (let i=0; i<s.length; i++) {
        if (arr.length == 0 || arr[j] != s[i]) {
            arr.push(s[i]);
            j++;
        } else {
            arr.pop();
            j--;
        }
    }
    return arr.length === 0 ? 1 : 0;
}