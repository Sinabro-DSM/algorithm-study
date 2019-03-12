function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let weightSum = 0;
  let bridge = new Array(bridge_length).fill(0);

  while(truck_weights.length>0) {
    answer++;
    weightSum -= bridge.shift();

    if(weightSum+truck_weights[0]<=weight) {
      weightSum+=truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return answer+bridge_length;
}