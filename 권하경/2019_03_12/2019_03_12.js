function solution(tickets) {
    let arr = ["ICN"];
    let input;
    let a=1;
    for(let i=0;i<arr.length;i++){
        let arr1 =[];
        for(let j in tickets){
            if(tickets[j].indexOf(arr[i])==0){
                arr1.push(j);
            }
        }
        if(arr1.length==0)
            continue;
        a = tickets[arr1[0]][1];
        input = arr1[0];
        for(let j in arr1){
            if(tickets[arr1[j]][1]<a){
                input = arr1[j];
                a = tickets[input][1];
            }
        }
        arr.push(a);
        tickets.splice(input,1);
        if(tickets.length==0)
            break;
    }
    return arr; 
}