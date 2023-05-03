//모음 제거

////방법 1
// function solution(s){
// let small = ['a','e','i','o','u']
// return s.replace(/['a','e','i','o','u']/g,'')
  
// }

//방법2
function solution(s){
  let small = ['a','e','i','o','u']
  let s1 = s.split('')
  let answer = s1.filter((el)=>(!small.includes(el))).join('')
  return answer
}



////삽질1
// function solution(s) {
//   s
//   let small = ['a', 'e', 'i', 'o', 'u']
//   for (let i = 0; i < s.length; i++) {
//     .filter(word => word !== small[i])
//   }
//   return s
// }




// console.log(solution("bus")) //bs
console.log(solution("nice to meet you")) //nc t .y y"