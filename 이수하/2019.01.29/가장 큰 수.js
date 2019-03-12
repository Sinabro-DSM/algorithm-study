//1차 시기
function solution(numbers) {
    var answer = '';
    let temp = 0;
    for(let i = numbers.length;i >0; i--){
        for(let j = 0;j<i;j++){
            if((String(numbers[j])+String(numbers[j+1]))*1 < (String(numbers[j+1])+String(numbers[j]))*1){
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    console.log(numbers)

    answer = numbers.join('')
    return answer;   
}

//2차시기
function solution(numbers) {
    var answer = '';
    let temp = 0;
    let number;
    number = numbers.map(function(num){
        return num += ''
    })
    for(let i = numbers.length;i >0; i--){
        for(let j = 0;j<i;j++){
            if((number[j]+number[j+1])*1 < (number[j+1]+number[j])*1){
                temp = number[j];
                number[j] = numbee[j+1];
                number[j+1] = temp;
            }
        }
    }
    console.log(numbers)

    answer = numbers.join('')
    return answer;   
}

//3차시기
function solution(numbers) {
    var answer = '';
    answer = numbers.map(function(num){
        return num += ''
    }).sort(function(a,b){
        return (b+a)*1-(a+b)*1
    }).join('');
    
    if(answer[0] === '0'){answer = '0'}
    return answer;   
}