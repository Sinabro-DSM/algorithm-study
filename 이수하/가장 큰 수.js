//[6,10,2]
//뒤에 0을붙이면?

function solution(numbers) {
    var answer = '';
    let temp;
    let number = numbers.toString();

    for(let i in number){
        if((number[i]+number[i+1]) < ())
    }

console.log(numbers);
    return answer;
}


//---------------
/*for(let i=0;i<numbers.length; i++){
    if(String(numbers[i]).length == String(numbers[i+1]).length){
        if(numbers[i]<number[i+1]){
            temp = number[i];
            number[i] = number[i+1];
            number[i+1] = temp;
        }
    }
    else{
        if(String(number[i])+String(number[i+1])<String(number[i+1])+String(number[i])){
            temp = number[i];
            number[i] = number[i+1];
            number[i+1] = temp;
        }
    }
}*/

//---------------------------------------
(String(numbers[j])+String(numbers[j+1]))*1 < (String(numbers[j+1])+String(numbers[j]))*1