function solution(progresses, speeds) {
    var answer = [];
    let queue=[];
    let distribute=1;
    let day;
    for(let i = 0;i<progresses.length;i++){
        queue.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    day=queue[0];
    for(let i = 1; i<= queue.length;i++){
        if(day < queue[i] || queue.length==i){
            answer.push(distribute);
            day = queue[i];
            distribute=1;
        }
        else{
            distribute++;
        }
    }   
    return answer;
}
