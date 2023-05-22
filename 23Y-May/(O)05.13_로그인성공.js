//로그인 성공?
//74%

// /머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가
// 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
//다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// id_pw	db	result
// ["meosseugi", "1234"]	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]	"login"
// ["programmer01", "15789"]	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]	"wrong pw"
// ["rabbit04", "98761"]	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]	"fail"

//전략 :  배열비교

function solution(info, db) {
  let answer = [];
  for (let i = 0; i < db.length; i++) {
    if (info[0] === db[i][0] && info[1] === db[i][1]) {
      answer.push(2);
    }
    if (info[0] === db[i][0] && info[1] !== db[i][1]) {
      answer.push(1);
    }
    if (info[0] !== db[i][0] && info[1] !== db[i][1]) {
      answer.push(0);
    }
  }
  if (answer.includes(2)) {return "login"}
  if (answer.includes(1)) {return "wrong pw"}
  if (answer.includes(0)) {return "fail"}
}

///다른사람 풀이

// 배열을 받을때 배열 값들을 한번에 변수선언 해버리기!
// 습관 들일만 하다
function solution(id_pw, db) {
    const [ userId, userPw ] = id_pw;
    for (const [ dbId, dbPw ] of db) {
        if (userId === dbId && userPw === dbPw) return "login";
        else if (userId === dbId && userPw !== dbPw) return "wrong pw";
    }
    return "fail";
}


console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
);
console.log(
  solution(
    ["rabbit04", "98761"],
    [(["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"])]
  )
);
