/* 
https://leetcode.com/problems/word-search/

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/* 
dfs탐색하면서 탐색여부 체크
새로운 배열 세팅
board에서 해당하는 첫글자부터  새로운 배열에 탐색했는지 여부 넣기
 인접한 셀에 다음 단어 있는지 확인 후 진행

*/
let exist = function (board, word) {
  const isVisit = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(false)
  );
  console.log("👉 ~ isVisit:", isVisit);
  //수행할 dfs 로직

  //만약 row와 col의 범위 안에서 모든 셀에 대해 dfs 수행
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        //일치하면 true반환
        if(dfs(i,j,0)){
            return true //모든 셀 파악 후 
        }
    }
  }
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
