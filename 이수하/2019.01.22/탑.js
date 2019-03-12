//1차시기------------------------------------------
function solution(heights){
    let tower = []
    tower = heights;
    var answer = []
  
    for(let i = heights.length-1; i>=0; i--){  
        if(tower[i] < tower[i-1]){
            answer.unshift(i);
        }
        else if(tower[i] > tower[i-1]){
            for(let j = i; j >= 0; j--){
                if(tower[i] < tower [j]){
                    answer.unshift(j);
                    break;
                }
                answer.unshift(0)  ``
            }
        }
    }
    answer.unshift(0)

    return answer;
}

//2차시기-----------------------------------------
function solution(heights){
    let tower = []
    tower = heights;
    var answer = []
  
    for(let i = heights.length-1; i>=0; i--){  
        for(let j = i-1; j >= 0; j--){
            if(tower[i] < tower [j]){
                answer.unshift(j+1);
                break;  
                }
            if(j == 0){
            answer.unshift(0)
            }
        }
    }
    answer.unshift(0)

    return answer;
}