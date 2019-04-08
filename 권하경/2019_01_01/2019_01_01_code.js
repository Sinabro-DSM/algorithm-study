function solution(s){
    let answer=0;
    let Arr = [];
    let j=0;
    if(s.length%2!=0) return answer;

    for(let i=0;i<s.length;i++){
        Arr.push(s[i]);

        if (Arr[j]==Arr[j-1]){
            Arr.pop();
            Arr.pop();
            j=Arr.length-1;
        }
        j++;
    }
    if(Arr.length==0) answer=1;
    return answer;
}

var s = 'baabaa';
var result = solution(s);
console.log(result); 