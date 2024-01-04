/* 
93. Restore IP Addresses
https://leetcode.com/problems/restore-ip-addresses/description/

A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example 1:

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
Example 2:

Input: s = "0000"
Output: ["0.0.0.0"]
Example 3:

Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

*/

/**
 * @param {string} s
 * @return {string[]}
 */
/* 
내 풀이.
.으로 구분 4개로 구분하지만 각 숫자당 0<= x && x<=255 여야함

그러면
일단 2가지 확실한 조건이 생김
1)총 12자리 초과이면 수를 만들 수 없다.
2)4자리 미만이면 수를 만들 수 없다.

그리고 추가로 딱 4자리 일 경우 . 만 붙여주면됨

그러면 나머지 부분은?
// substring으로 i=0부터 i<=3인 값까지 자르면서 255가 안넘을 경우 temp에 붙이기
*/
var restoreIpAddresses = function (s) {
  let answer = [];
  //2가지 확실한 예외 조건을 만족하면 빈배열 반환
  if (s.length > 12 || s.length < 4) return [];
  //딱 4자리 일 경우 . 만 붙이기
  if (s.length === 4) {
    answer.push([...s].join("."));
  }
// answer.push(s.substring(1,4))

//뭔가 이부분이 함수로 빼서 따로 작동시켜야 할듯
for(let i=0; i<s.length; i++){
    let temp = s.substring(i,)//뭔가 가져온 값이 있을 거고
    if(Number(temp)<=255){

    }
}
  return answer;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
