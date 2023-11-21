/* 
주어진 값 n의 높이에 맞는 별 문자 그리기
10초, 2GB
 */

const solution = (n)=>{
    let answer = '';
    for(let i=1; i<=n; i++){
        answer += '*'.repeat(i);
        if(i!==n){
            answer += '\n'
        }
    }
    return answer;
}


console.log(solution(5));
console.log(solution(3));


/* 
프로그래머스에서 이렇게 실행해야됨

process.stdin.setEncoding("utf8");
process.stdin.on("n", (n) => {
    let answer = '';
    for(let i=1; i<=n; i++){
        answer += '*'.repeat(i);
        if(i!==n){
            answer += '\n'
        }
    }
    console.log(typeof answer)
    return answer;
});
*/