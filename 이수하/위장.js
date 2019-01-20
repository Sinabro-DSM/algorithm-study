//경우의수 활용.
//a종류 옷 개수*b종류 옷 개수*c종류 옷 개수...로 계산

function solution(clothes) {
    var answer = 0;
    let container = {};     //옷의 종류를 담을 배열(cloths)
    
    for(let i in clothes)
    {
        if(container[clothes[i][1]] === undefined){     //*프로퍼티 동적 생성, 프로퍼티가 없다면 키값을 생성하고, 벨류를 1로 설정
            container[clothes[i][1]] = 1;
        }
        else{       //프로퍼티가 있다면 그 프로퍼티의 벨류에 1을 더함
            container[clothes[i][1]]+=1;
        }
    }
    
    answer = 1      //0에 뭘 곱하든 0이기때문에 1을 초깃값으로 지정
    for(let j in container){        //j가 container를 돈다
        answer *= container[j]+1;       //container[j]==container의 하나의 프로퍼티 벨류값, 안입는 경우도 있기 때문에 1을 더함
    }
    
    return answer-1;        //모두 안입는경우는 없기 때문에 -1
}