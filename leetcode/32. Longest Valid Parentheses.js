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
  let stack = [];
  let count = 0;
  let maxCount = 0
  for (let i = 0; i < s.length; i++) {
    let currentItem = s[i];
    // console.log("👉 ~ firstItem:", firstItem)
    if (currentItem == "(") {
      count = 0;
      stack.push(i);
    } else if (currentItem === ")" && stack.length>0) {
      stack.pop();
      //stack에 pop을 했는데도 stack이 비어져있지않다?
      if(stack.length!=0){
        count = i-stack[stack.length-1]
      }else{//스택이 비어져있다면?
        //닫힌 괄호만큼이 유효한 숫자
        count += 2
      }
      maxCount = Math.max(count, maxCount)
    }

    return maxCount
    // console.log("👉 ~ ss:", ss);
    // console.log("👉 ~ stack:", stack);
  }
  return count;
};

console.log(longestValidParentheses("(()")); //expected 2
console.log(longestValidParentheses(")()())")); //expected 4
console.log(longestValidParentheses("")); //expected 0
console.log(longestValidParentheses("()(())")); //expected 6
console.log(longestValidParentheses("()(()")); //expected 2
//마지막 부분을 해결하려면?
