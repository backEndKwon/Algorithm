///인덱스바꾸기

//84%

// my_string	num1	num2	result
// "hello"	1	2	"hlelo"
// "I love you"	3	6	"I l veoyou"

전략 :
function solution(s, num1, num2) {
  let x = s.split("");
  let temp = x[num1];
  x[num1] = x[num2];
  x[num2] = temp;
  return x.join("");
}


console.log(solution("hello", 1, 2));
console.log(solution("I love you", 3, 6));
