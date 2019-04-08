function solution(progresses, speeds) {
    let answer = [];
    let num=0;
    while(progresses.length!=0){
        for(let i=0;i<progresses.length;i++){
            progresses[i]+=speeds[i];
            if(progresses[0]>=100){
                progresses.shift();
                speeds.shift();
                num++;
                i--;
            }
        }
        if(num!=0){
            answer.push(num);
            num=0;
        }
    }
    return answer;
}