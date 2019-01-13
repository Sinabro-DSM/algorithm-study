function solution(clothes) {
    let map = new Map();
    let num = 1;

    for(let i=0;i<clothes.length;i++){
        if(map.has(clothes[i][1])){
            map.set(clothes[i][1],parseInt(map.get(clothes[i][1]))+1);
        }
        else{
            map.set(clothes[i][1],2);
        }
    }
    for(let value of map.values()){
        num = value * num;
    }
        return num-1;
}
let clothes = 	[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];
console.log(solution(clothes));