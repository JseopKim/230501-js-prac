let example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];
function flatten(data) {
  let output = [];
  for (let item = 0; item < data.length; item++) { //? 파라미터로 들어온 data의 길이만큼 반복
    if(Array.isArray(data[item])) { //? 만약 data가 들어왔을 때 배열
      output.push(...flatten(data[item])) //? output 배열 안에 속하는 data 인덱스를 넣기
    } else {
      output.push(data[item]); //? 배열이 아니라면 그냥 그대로 넣기
    }
  }
  return output; //? 넣어진 배열 output을 return
}

console.log(flatten(example));