//추억점수
//62%

// //name	yearning	photo	result
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
// ["kali", "mari", "don"]	[11, 1, 55]	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]	[67, 0, 55]
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may"],["kein", "deny", "may"], ["kon", "coni"]]	[5, 15, 0]

//전략 : 해당 인덱스에 맞는 점수 연결=> 이름 다른 것들은 0처리 후 reduce로 더하기 또는 map으로 해당값 돌면서 더해주기

//hint참고후 풀이
function solution(name, num, list) {
  let answer = [];
  for (let lists of list) {
    let sum = 0;
    for (let j = 0; j < name.length; j++) {
      if (lists.includes(name[j])) {
        sum += num[name.indexOf(name[j])];
      } else {
        sum += 0;
      }
    }
    answer.push(sum);
  }
  return answer;
}

//원래 구현하려고 했던 방향 : 객체화해서 이름과 점수 연결, map으로 해당 값 전환
function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
  );
}

//시도1 => 실패
// function solution(name, num, list) {
//   let list1 = [];
//   for (let i = 0; i < list.length; i++) {
//     let temp = [];
//     for (let j = 0; j < name.length; j++) {
//       for (let k = 0; k < name.length; k++) {
//         if (list[i][j] === name[k]) {
//           temp.push(num[name.indexOf(name[k])]);
//         } else {
//           temp.push(0);
//         }
//       }
//     }
//     list1.push(temp.reduce((a, b) => a + b));
//   }
//   return list1;
// }

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
);
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
);
