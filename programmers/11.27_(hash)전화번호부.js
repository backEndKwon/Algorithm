/* 
전화번호 목록
https://school.programmers.co.kr/learn/courses/30/lessons/42577

phone_book	return
["119", "97674223", "1195524421"]	false
["123","456","789"]	true
["12","123","1235","567","88"]	false

어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 리턴하고, 그렇지 않으면 true를 리턴
*/

/* 
논리.
해시를 사용하면 될듯
전화번호를 해시에 넣고, 다른 전화번호를 해시에서 찾는다.

*/

function solution(phone_book) {
  //해쉬 생성
  let hash = {};
  for (let i = 0; i < phone_book.length; i++) {
    hash[phone_book[i]] = true;//공간복잡도 O(n)
  }
  //phone_book을 해쉬테이블에서 찾는다.
  //시간복잡도 = O(N*M) N은 전화번호의 갯수, M은 전화번호의 길이
  for (let i = 0; i < phone_book.length; i++) {
    let frontPhoneNumber = "";
    for (let j = 0; j < phone_book[i].length; j++) {
      // 앞 전화번호를 하나씩 늘려가며 해당 번호가 해쉬에 있는지 확인한다.
      frontPhoneNumber += phone_book[i][j];

      if (hash[frontPhoneNumber] && frontPhoneNumber !== phone_book[i]) {
        //hash에 있지만, 현재 전화번호와는 다른 경우(즉, 포함만 하는 경우)
        return false;
      }
    }
  }
  return true
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
