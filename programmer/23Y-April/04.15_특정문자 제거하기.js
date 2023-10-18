//특정문자 제거하기



function solution(my_string, letter) {
  
    
  
  return my_string.split(letter).join('')  
}

console.log(solution("abcdef"	,"f"))
console.log(solution("BCBdbe"	,"B"))
