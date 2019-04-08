function solution(bridge_length, weight, truck_weights) {
    let inner=[];
    let time=0;
    let check=0;
    let i=0;
    while(truck_weights.length!=0){
        inner[i]=bridge_length;
        check+=truck_weights[i];
        time++;
        for(let y=0;y<inner.length;y++){
            inner[y]--;
            if(y==inner.length-1){
                if(inner[0]==0){
                    inner.shift();
                    check-=truck_weights[0];
                    truck_weights.shift();
                    i--;
                    if(!truck_weights.length){
                        time++;
                        break;
                    }
                }
                if(check+truck_weights[i+1]<=weight)
                    break;
                y=-1;
                time++;
            }
        }
        i++;
    }
    return time;
}