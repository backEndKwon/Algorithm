/* 
tik-tac-toe 게임 승자 알아내기
만약
[
    [1,1,0],
    [1,0,2],
    [1,2,2]
]
일경우 1 win

로직.
1을 red, 2를 blue, 0은 공백으로 가정

*/
// checkWinner 함수를 통해서 현재 보드판에 winner가 있는지 체크!
//있다면 누가 이겼는지 반환, 없다면 false반환
// 3x3게임
//brute force
// function checkWinner(board) {
//   //가로 세로 대각선 체크

//   for (let i = 0; i < 3; i++) {
//     //가로
//     if (
//       board[i][0] !== 2 &&
//       board[i][0] === board[i][1] &&
//       board[i][0] === board[i][2]
//     ) {
//       return `${board[i][0]}우승!`;
//     }
//     //세로
//     if (
//       board[0][i] !== 2 &&
//       board[0][i] === board[1][i] &&
//       board[0][i] === board[2][i]
//     ) {
//       return `${board[0][i]}우승!`;
//     }
//     //대각선 2가지 경우
//     if (
//       board[0][0] !== 2 &&
//       board[0][0] === board[1][1] &&
//       board[0][0] === board[2][2]
//     ) {
//       return `${board[0][0]}우승!`;
//     }
//     if (
//       board[0][2] !== 2 &&
//       board[0][2] === board[1][1] &&
//       board[0][2] === board[2][0]
//     ) {
//       return `${board[0][2]}우승!`;
//     }
//     //모든 칸이 채워져있는데 무승부일경우
//     if (board.flat().every((cell) => cell !== 2)) {
//       return "무승부";
//     }
//     //이도 저도 아닐 경우
//     return null;
//   }
// }
function checkHorizon(board, i) {
  if (
    board[i][0] !== 2 &&
    board[i][0] === board[i][1] &&
    board[i][0] === board[i][2]
  ) {
    return `${board[i][0]} wins!`;
  }
  return null;
}

function checkVertical(board, i) {
  if (
    board[0][i] !== 2 &&
    board[0][i] === board[1][i] &&
    board[0][i] === board[2][i]
  ) {
    return `${board[0][i]} wins!`;
  }
  return null;
}

function checkCross(board) {
  if (
    board[0][0] !== 2 &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return `${board[0][0]} wins!`;
  }
  if (
    board[0][2] !== 2 &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return `${board[0][2]} wins!`;
  }
  return null;
}

function fullBoardDraw(board) {
  if (board.flat().every((cell) => cell !== 2)) {
    return "It's a draw!";
  }
  return null;
}

function checkWinner(board) {
  for (let i = 0; i < 3; i++) {
    // 가로 세로 대각선 체크
    // 가로
    const horizontalResult = checkHorizon(board, i);
    if (horizontalResult) {
      return horizontalResult;
    }

    // 세로
    const verticalResult = checkVertical(board, i);
    if (verticalResult) {
      return verticalResult;
    }

    // 대각선 2가지 경우
    const crossResult = checkCross(board);
    if (crossResult) {
      return crossResult;
    }

    // 모든 칸이 채워져 있고 무승부일 경우
    const drawResult = fullBoardDraw(board);
    if (drawResult) {
      return drawResult;
    }
  }

  // 이도 저도 아닐 경우
  return null;
}

console.log(
  checkWinner([
    [1, 1, 0],
    [1, 0, 2],
    [0, 2, 2],
  ])
);
