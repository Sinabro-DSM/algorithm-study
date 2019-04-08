function solution(numbers) {
    var answer = '';
    let num1;
    let num2;
    let len = numbers.length;
    while(len!=0){
        for(let i=1;i<len;i++){
            num1 = `${numbers[i-1]}`+`${numbers[i]}`;
            num2 = `${numbers[i]}`+`${numbers[i-1]}`;
            if(num1<num2){
                [numbers[i-1],numbers[i]] =  [numbers[i],numbers[i-1]];
            }
        }
        len--;
    }
    for(let i=0;i<numbers.length;i++){
        answer += numbers[i];
    }
    if(answer == 0)
        return '0';
    return answer;
}
numbers = [6,10,2];

console.log(solution(numbers));