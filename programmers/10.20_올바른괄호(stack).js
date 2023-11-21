/* 
올바른 괄호
https://school.programmers.co.kr/learn/courses/30/lessons/12909
s	answer
"()()"	true
"(())()"	true
")()("	false
"(()("	false
 */

/* 힌트 : ( => +1, ) => -1결국 0을 유지하나?*/

const solution = (s) => {
  const sArray = s.split("");
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      if(sArray[i] === ")"&&stack[stack.length-1] === "(") {
      stack.pop();
    }else{      stack.push(s[i]);
}
  }
  return stack.length === 0
};

// console.log(solution("()()"));
// console.log(solution("(())()"));
console.log(solution(")()("));
// console.log(solution("(()("));
// console.log(solution("())(()"));
