/* 회문순열(palindrome) 구현해보기 */

/* 
입력: Tact Coa
출력: True (taco cat, atco cta 등등)
*/

/* 
전략
1. 문자의 빈칸 제거
1.5 빈칸 제거후 문자열 길이가 홀수이면? 짝수이면? 이로 구분
짝수일경우
2.첫번째 인덱스와 끝 인덱스를 비교해서 닽으면 true,아니면 false
3. 2번 반복해서 문자열의 길으/2 만큼 반복
홀수일경우
2. 첫번째 인덱스와 끝 인덱스를 비교해서 닽으면 true,아니면 false
3. 2번 반복해서 정수((문자열의 길이)/2)-1 만큼 반복
*/

/* ① 순열이라는 단어를 이해 못하고 풀었을 때 */
const palindrome1 = (str) => {
  const setStr = str.split(" ").join("").toLowerCase(); 
  //문자열 정제하면서 문자열 길이(n) 만큼 시간을 소요하므로 bigO(n)
  //공간복잡도도 setStr에 저장하므로 bigO(n) 
  const len = setStr.length;
  if (len % 2 === 0) {
    return isPalindrome(setStr, 0, len -1); // 해당 부분 중복로직으로 모듈화
  } else {
    return isPalindrome(setStr, 0, len -1);
  }
};

const isPalindrome = (str, start, end) => {
  //start = 0 end = 홀짝다름
  let result = true;
  while (start < end) {
    if (str[start] !== str[end]) {
      result = false;
      break;
    } 
    start++;
    end--;
  }
  return result;
};


/* ②순열 과 문제 이해 완료 */
/* 해쉬에 담아서 해당 문자 몇번나왔는지 체크 후 단 하나의 홀수만 있으면 true, 아니면 false */
const palindrome = (str) => {
    const hash = {}
    const setStr = str.split(" ").join("").toLowerCase();
    for (let i = 0; i < setStr.length; i++) { // 시간 복잡도 : bigO(n)
        if (hash[setStr[i]]) {
            hash[setStr[i]]++;
        } else {
            hash[setStr[i]] = 1;
        }
    }
    if(Object.values(hash).filter((v) => v % 2 === 1).length > 1 ) return false;
    // 시간 복잡도 : bigO(n)
    else return true
}
console.log(palindrome("tact coa")); // false
console.log(palindrome("taco cat")); // true
console.log(palindrome("atco cta")); // true
console.log(palindrome("akbbf cdd")); // false
