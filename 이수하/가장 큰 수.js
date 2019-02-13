function solution(numbers) {
    var answer = '';
    let temp = 0;
    let zero = 0;
    for(let i = numbers.length;i >0; i--){
        for(let j = 0;j<i;j++){
            if(numbers[i]==0){zero +=1;
                             console.log(zero)}
            if((String(numbers[j])+String(numbers[j+1]))*1 < (String(numbers[j+1])+String(numbers[j]))*1){
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    console.log(numbers)
    if(zero == numbers.length){answer = '0'}
    else{answer = numbers.join('');}
    return answer;   
}
