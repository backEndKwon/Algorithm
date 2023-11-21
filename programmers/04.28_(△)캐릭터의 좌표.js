//캐릭터의 좌표

// keyinput	                                     board	result
// ["left", "right", "up", "right", "right"]	[11, 11]	[2, 1]
// ["down", "down", "down", "down", "down"]	    [7, 9]	[0, -4]

//다른분 풀이

function solution(input, b) {
  let x = 0;
  let y = 0;

  let xR = b[0] / 2;
  let yR = b[1] / 2;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "left" && x - 1 > -xR) x--;
    if (input[i] === "right" && x + 1 < +xR) x++;
    if (input[i] === "down" && y - 1 > -yR) y--;
    if (input[i] === "up" && y + 1 < +yR) y++;
  }

  return [x, y];
}
// function solution(input) {
//   let key = new Array(2); //d&u l&r
//   let keyX = 0;
//   let keyY = 0;
//   for (let board in input) {
//     if (board === "left") keyX -= 1;
//     if (board === "right") keyX += 1;
//     if (board === "down") keyY -= 1;
//     if (board === "up") keyY += 1;
//   }
//   return [keyX, keyY];
// }

console.log(
  solution(["left", "right", "up", "right", "right", "down"], [11, 11])
); //11
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //120
