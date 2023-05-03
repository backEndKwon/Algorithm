//하샤드 수
/// 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수

// arr	return
// 10	true
// 12	true
// 11	false
// 13	false


function solution(x) {
    //일단 하나씩 배열로 해서 index붙여줄수있게 세팅
    let a = x.toString().split('')
    let sum = 0
    for (let i = 0; i < a.length; i++) {
         sum += Number(a[i]);
    }
//string으로 바꾸었었기 떄문에 sum은 string으로 인식 되고 있었다.
//Number로 바꿔주자마자 해결완료
    if(x % sum === 0){
        return true
    } return  false;
}

console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))