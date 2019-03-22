//삽입 / 삭제 / 유지

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];     //다리에 진입
    let truckWeight;        //다리에 진입한 차의 무개합
    let time = 0;

    while(truck_weights.length !=0 || bridge.length !=0){    //남은 트럭의 수가 0이 아니고 다리에 진입한 트럭도 0개가 아닐 때
        if(){       //삽입

        }
        if(){       //삭제

        }
        else{
            
        }
    }

    return answer;
}



//-------------------------------------------
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];
    let bridge_weight = truck_weights[0];
    let i = 0;
    let time = 0;
    
    while(truck_weights!= null || bridge != null){
        if(bridge.length < bridge_length && bridge_weight < weight ){     //삽입
            bridge.unshift(truck_weights[i])
            bridge_weight += truck_weights[i]
            i++;
            time++;
        }     
        else if(bridge.length == bridge_length){       //삭제
           bridge.pop();
           bridge_weight -= truck_weights[i]
           i++
           time++ 
        }
        else{      
            time++;
            i++;
        }
    }
    answer = time;
    return answer;
}