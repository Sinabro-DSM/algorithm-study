
function solution(participant, completion) {
    var answer = '';
    let cant;
    participant.sort();
    completion.sort();
    for(let i in participant){
        if(participant[i]!=completion[i]){
            cant = participant[i];
        }
    }
    return answer;
}
