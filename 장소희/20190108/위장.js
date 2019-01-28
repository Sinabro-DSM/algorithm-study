let clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
    // 의상 별 종류 배열로 얻어오기
    let collection = clothes.map(x => x[1]);
    
    // // 중복 요소 제거한 배열
    // let kindArr = collection.filter(function(item, pos){
    //     return collection.indexOf(item) == pos;
    // });

    let store = {};

    for(let i in collection){
        if(store[collection[i]] === undefined){
            store[collection[i]] = 1;
        }else{
            store[collection[i]] += 1;
        }     
    }

    let result = 1;
    for(let j in store){
        result = result * (store[j] +1);
    }

    return result-1;

}