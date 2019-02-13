var head = new Array();
var eye = new Array();
var top = new Array();
var pants = new Array();
function solution(){

    ["yellow_hat","head"],
    ["blue_sunglass", "eye"],
    ["green_turban","head"],
];

  for(let i=0;i<clothes.length;i++){
    if(clothes[i][1] == "head"){
      head.push(clothes[i]);
    }
    else if(clothes[i][1] == "eye"){
      eye.push(clothes[i]);
    }
    else if(clothes[i][1] == "top"){
      top.push(cloths[i]);
    }
    else if(clothes[i][1] == "pants"){
      pants.push(clothes[i]);
    }
  }
  let res = clothes.length + head.length*eye.length*top.length*pants.length;
  console.log(head);
  console.log(eye);
  console.log(top);
  console.log(pants);
  console.log(res);
}

//clothes.length 

//head.length*eye.length
//head.length*top.length
//head.length*pants.length
//eye.length*top.length
//eye.length*pants.length
//top.length*pants.length

//head.length*eye.length*pants.length
//head.lenght*eye.length*top.length
//head.length*pants.length*top.lengh
//eye.length*pants.length*top.length

//clothes.length + head.length*eye.length*top.length*pants.length;