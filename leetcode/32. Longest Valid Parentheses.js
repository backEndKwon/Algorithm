/* 
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring
.
https://leetcode.com/problems/longest-valid-parentheses/description/

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0

*/
/*  
내 풀이.
스택을 이용해서 풀기
풀다보니 "()(()" 이것에 대한 값이 2가 되야함
알고보니 () => 2 (()) => 4 ()()=>2 와 같이 


*/

/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
  let stack = [-1];
  let max = 0;

  //console.log(longestValidParentheses("()(()")); //expected 2
  if (s.length === 0) return 0;

  for (let i = 0; i < s.length; i++) {
    // console.log("👉 ~ firstItem:", firstItem)
    if (s[i] == "(") {
      stack.push(i);
    } else {
      //그렇지 않으면 stack에서 pop해라
      // 그런데 stack이 빈배열이면 stack에 i를 넣어줘(ex, ")())이럴때")
      stack.pop();
      //stack에 pop을 했는데도 stack이 비어져있으면?
      if (stack.length === 0) {
        stack.push(i);
      } else {
        //stack이 비어져있지 않다면? 
        // 현재 인덱스 값과 stack의 마지막 값을 뺀 길이가  
        max = Math.max(max, i - stack[stack.length - 1]);
/* 
"()(())"
i=2 "("일때 stack=[-1,2] 
i=3 "("일때 stack=[-1,2,3]
i=4 ")"일때 stack.pop으로 stack=[-1,2], max = Math.max(2,4-2) = 2
i=5 ")"일때 stack.pop으로 stack=[-1], max = Math.max(2,5-(-1)) = 6
*/
      }
    }
  }
  return max;
};

console.log(longestValidParentheses("(()")); //expected 2
console.log(longestValidParentheses(")()())")); //expected 4
console.log(longestValidParentheses("")); //expected 0
console.log(longestValidParentheses("()(())")); //expected 6
console.log(longestValidParentheses("()(()")); //expected 2
//이 문제 팁은 ()(()) 이렇게 연결되었을떄 카운트하는 것
