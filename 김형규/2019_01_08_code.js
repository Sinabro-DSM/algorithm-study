function solution(clothes) {
    var answer = 1;
    const store = {};
    for(let i = 0; i < clothes.length; i++) {
        if(store[clothes[i][1]] === undefined)
            store[clothes[i][1]] = 1;
        else
            store[clothes[i][1]] += 1;
    }
    
    for(let i in store) {
        answer *= store[i]+1
    }
    return answer - 1;
}