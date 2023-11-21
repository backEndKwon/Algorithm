//시저암호
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수

//  s	    n	    result
// "AB"	    1	    "BC"
// "z"	    1	    "a"
// "a B z"	4	    "e F d"

//String.fromCharCode(97부터122 a시작) //총 26개
function solution(s, n) {
    
    var asmall = Array(26).fill().map((x,i)=>String.fromCharCode(i+97))
    var abig = Array(26).fill().map((x,i)=>String.fromCharCode(i+65))
    var answer =  ''
    //문자열 안에 소문자  빈칸 있으니까 하나씩 따로봐줘야함
    //하나씩 따로 정의한거
    for (let i=0; i<s.length; i++){
        var text = s[i]
        if(text===' '){
            answer += ' ';
            continue;
        }
        //a[i]대문자인지 소문자인지 구분세팅 + index미리 세팅
        var bigsmall = abig.includes(text) ? abig : asmall;
        var index = bigsmall.indexOf(text)+n
        //세팅완료
        if(index >= bigsmall.length) {
            index -= bigsmall.length ; 
        }
        answer += bigsmall[index];
        
    }
    return answer 
}

console.log(solution("AB", 1))
console.log(solution("z", 1))
console.log(solution("a B z", 4))

// function solution(s, n) {
    
//     var asmall = Array(26).fill().map((x,i)=>String.fromCharCode(i+97))
//     var abig = Array(26).fill().map((x,i)=>String.fromCharCode(i+65))
//     var answer = ''  // answer 변수를 빈 문자열로 초기화해야 함.

//     for (let i=0; i<s.length; i++){
//         var text = s[i]
//         if(text === ''){  // 비어있는 문자열인지 확인할 때 s[i]==='' 대신 text === '' 사용
//             answer += ''; // 빈 문자열을 추가해야 함.
//             continue;
//         }
//         //a[i]대문자인지 소문자인지 구분세팅 + index미리 세팅
//         var bigsmall = abig.includes(text) ? abig : asmall;
//         var index = bigsmall.indexOf(text)+n
//         //세팅완료
//         if(index >= bigsmall.length) {
//             index -= bigsmall.length;  // 중괄호({}) 추가하여 if문 내용 수정
//         }
//         answer += bigsmall[index];
        
//     }
//     return answer 
// }