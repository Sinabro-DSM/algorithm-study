function solution(s) {
    const arr = [];

    for(let i=0; i<s.length; i++) {
        if(arr.length==0 || arr.slice(-1)[0] !=s[i])
            arr.push(s[i]);
        else
            arr.pop();
    }
    
    if(arr.length>0) return 0;
    else return 1;
}