function solution(heights) {
    let answer = [];
    let temp;
    let status;
    while(heights.length>1){
        temp = heights.pop();
        for(let i = heights.length-1;i>=0;i--){
        if(temp<heights[i]){
            status =1
            answer.unshift(i+1);
            break;
        }
        else
            status = 0;
        }
       if(!status){
        answer.unshift(0);
        } 
    }

    answer.unshift(0);
    return answer;
}
