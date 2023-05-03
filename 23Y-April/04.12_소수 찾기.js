//소수 찾기
///시간초과//////////////////////////////////////////////
// n	result
// 10	4
// 5	3
function solution(n) {
    let count = 0;
    let x = n
    for (let i = 0; i <n ; i++) {

        if (isprim(x)) { count ++ }
        x -= 1;
    }
    return count;
}

function isprim(x) {
   if(x%2===0){return false}
    for (let i = 2; i <=Math.sqrt(x); i+=2) {
        if (x % i === 0) {return false}
    } return true
}
///시간초과//////////////////////////////////////////////
// 코드 구현 아이디어
// 1부터 N까지 들어간 배열을 만든다. 
// 2부터 √N까지 반복문을 돌면서 안에서 해당의 숫자의 배수들을 0으로 만든다.
// (자연수 처리를 위해서 i < √N 대신 i² < N를 이용했다) 
// 이후에 1은 소수가 아님으로 shift()로 제거하고 
// filter를 이용해서 0의 숫자들을 모두 제거한다. 
// 이렇게 만들어진 배열의 길이를 리턴하면 1부터 N까지의 소수 개수를 알 수 있다.

//isprime과 에라토스테네스의 채와 섞었지만 실패 효율성 탈락
// // function solution(s) {
// //         let count = 0;
// //         let x = s
// //         for (let i = 0; i <n ; i++) {
    
// //             if (sol(x)) { count ++ }
// //             x -= 1;
// //         }
// //         return count;
// //     }
// // function sol(n) {

// //     let num = []
// //     for (let i = 0; i < n; i++) { num.push(i) }
// //     //num에서 배수의 숫자들은 0으로 만들어주기 어차피 나눠지는수이니까 경우의 수를 줄이기 위해서
// //     for (let i = 2; i * i < n; i++) {
// //         if (num[i]) {
// //             let s = num[i];
// //             for (let j = num * num; j <= n; j += num) {
// //                 num[j - 1] = 0;
// //             }
// //         }
// //     }
// // let answer = num.filter((number)=>number);
// // answer.shift()
// }
function solution(n) {
    const s = new Set();  
    for (let i=1; i<=n; i+=2){
        s.add(i) // s에는 1,3,5,7,9.... 홀수만 들어감 //왜냐면 2빼고 어차피 짝수에는 없음
    }
    s.delete(1)
    s.add(2)// s에는 2,3,5,9,11,13,15,17...

    for(let i=2; i*i<=n; i++){
        if(s.has(i)){//쓸데없이 6,7 검사안함
            for(let x = i*2; x<=n; x+=i){
                s.delete(x)
            }
        }
    }
    return s.size //length는 안되는 이유가 set() {3,5,7,2} 로 객체로 나오기때문에 
}//객체 = > .size, .has, .delete, .add / 배열 => .length


console.log(solution(10))
console.log(solution(5))