function solution(people, limit) {
    var answer = 0;
    let boat=0;
    let left=0;
    let right=people.length-1;       
    
    people.sort(function(a,b){
        return a-b;
    });     
    console.log(people);
    while(left <= right){        
        if(people[left]+people[right] <= limit){       
            boat++;
            left++;
            right--;
        }
        else{     
            boat++; 
            right--;      
        }
    }
    answer = boat;
    return answer;
}