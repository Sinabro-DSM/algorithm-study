function solution(people, limit) {
    people.sort((a, b) => a-b);
    let i = 0, j = people.length-1
    for(; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}// 응 안돼~