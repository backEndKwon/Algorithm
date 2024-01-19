/* 
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/description/

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

/* 
문제의 요점은 같은형태(같은 문자x)모양이 맞는지 체크
같으면 true, 아니면 false

풀이 방향
어떻게 모양의 맞는지 체크할 것인가?
중복값을 제거한 후 배열의 길이를 비교해서 그 길이 값이 다르면 false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  //   let a = s.split("");
  //   let b = t.split("");
  //   let resulta = [];
  //   let resultb = [];

  //   for (let i = 0; i < a.length; i++) {
  //     if (resulta[resulta.length - 1] != a[i]) {
  //       resulta.push(a[i]);
  //     }
  //     if (resultb[resultb.length - 1] != b[i]) {
  //       resultb.push(b[i]);
  //     }
  //   }
  //   console.log("👉 ~ resulta:", resulta);
  //   console.log("👉 ~ resultb:", resultb);
  //   console.log(
  //     "👉 ~ resulta.length === resultb.length:",
  //     resulta.length === resultb.length
  //   );
  //   return resulta.length === resultb.length ? true : false;
  //   console.log("👉 ~ b:", a.size);
  //   if (a.size === b.size) {
  //     return true;
  //   } else {
  //     // Set의 크기가 다를 경우 false 반환
  //     return false;
  //   }

  //hint 순서대로 나오는 원소값의 위치로 비교
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
};

isIsomorphic("egg", "add");
isIsomorphic("foo", "bar");
//오류 반례
isIsomorphic("bbbaaaba", "aaabbbba"); //false
// 추가 오류 반례
isIsomorphic("badc", "baba"); //false
