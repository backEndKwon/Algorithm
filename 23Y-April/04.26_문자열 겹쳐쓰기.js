//문자열 겹쳐쓰기

// //y_string	overwrite_string	s	result
// "He11oWor1d"	"lloWorl"	2	"HelloWorld"
// "Program29b8UYP"	"merS123"	7	"ProgrammerS123"


function solution(str,over,num) {
  
  let s = [...str];
  let l = over.length
  let front = str.substr(num,l)
  let answer = s.splice(num,l,over);
  return s.join('')
}
console.log(solution("He11oWor1d","lloWorl",2))//11
console.log(solution( "Program29b8UYP","merS123",7))//120
///첫번째 오류 s가 function이 아니다 오류메세지 : s.replace is not a function

///두번째 오류 딱 하나가 걸리는데.. 뭐지?
 // let s = str.split("")
//  let l = over.length
//  let front = str.substr(num,l)
 
//  return str.replace(front,over);;
//아~ replace로는 front값에서 중복된값이 있었을때 해결책이 없구나
//그러면 splice를 써보자 어렵지만 자꾸써보자