/*
숫자뽑기

my_string	result
"hi12392"	[1, 2, 2, 3, 9]
"p2o4i8gj2"	[2, 2, 4, 8]
"abcde0"	[0]

*/

function solution(str){
regex = /[^0-9]/g
return  str.replace(regex,"").split("").map((a)=>Number(a)).sort((a,b)=>a-b)
}
console.log(solution("hi12392"))
console.log(solution("p2o4i8gj2"))
console.log(solution("abcde0"))