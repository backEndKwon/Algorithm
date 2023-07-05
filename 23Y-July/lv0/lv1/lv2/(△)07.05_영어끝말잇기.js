/*
영어끝말잇기
lv2

제한 사항
끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
단어의 길이는 2 이상 50 이하입니다.
모든 단어는 알파벳 소문자로만 이루어져 있습니다.
끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
정답은 [ 번호, 차례 ] 형태로 return 해주세요.
만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

n	words	result
3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]

전략
n크기의 배열 세팅 word를 1개씩 push하기, 해당 끝글자와 다음차례의 첫글자 비교해서 true? 계속, false? 해당 값을 가졌던 사람 체크(words.length%n으로 구분) 변수 sum을 한텀마다 더해주기
*/

function solution(n, words) {
  // const set = new Array(n);

  for (let i = 0; i < words.length - 1; i++) {
    //   set[0] = words[0];
    //   if (
    //     words[i][words[i].length - 1] === words[i + 1][0] &&
    //     !set.includes(words[i + 1])
    //   ) {
    //     set[i + 1] = words[i + 1];
    //   } else {
    //     break;
    //   }
    // }
    // return Math.ceil(set.length%n+1); //=> 몇번째 사람이 틀렸는지
    // return Math.ceil(set.length/n); // => 몇번째 게임인지
    // return words.length === set.length
    //   ? [0, 0]
    //   : [(set.length % n) + 1, Math.floor((set.length / n) + 1)];
    if (
      words[i][words[i].length - 1] !== words[i + 1][0] ||
      words.slice(0, i + 1).includes(words[i + 1])
    ) {
      return [((i + 1) % n) + 1, Math.floor((i + 1) / n + 1)];
    }
  }
  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); //3이 3번째 tank틀림
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
