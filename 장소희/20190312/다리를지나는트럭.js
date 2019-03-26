function solution(bridge_length, weight, truck_weights) {
  let left_truck = truck_weights.map(w => {
      return { weight: w, count: 0 }
  });
  
  let bridge = [];
  let sec = 0
  let bridge_weight = 0
  
  while (bridge || left_truck) { 
      if (bridge[0]) {
          if (bridge[0].count === bridge_length) {
              bridge_weight -= bridge[0].weight;
              bridge.shift();
              
              if(bridge.length === 0 && left_truck.length === 0) break;
          }
      }
      if(left_truck[0] !== undefined){ 
          if(bridge_weight + left_truck[0].weight <= weight && bridge.length < bridge_length){
              bridge_weight += left_truck[0].weight;
              bridge.push(left_truck.shift());
          }
          
      }
      bridge.forEach(i => {
          i.count++;
      })
      sec++;
  }
  return sec + 1;
}