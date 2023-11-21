//옹알이
// babbling	result
// ["aya", "yee", "u", "maa", "wyeoo"]	1
// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3



//다른분 풀이 고민해보기

function solution(bowling) {
    let answer = 0;
    const baby = ["aya", "ye", "woo", "ma"]

    for (let i in bowling) {
        let bow = bowling[i];

        //bow가 공백이여야 소리를 완전히 다 낸것
        for (let j in baby) {
            if (bowling[i].includes(baby[j])) {
                bow = bow.replace(baby[j], "X");
            }
        }
            bow = bow.replace(/X/gi, "");
            if (bow.length === 0) {
                answer += 1;
            }
    }
    return answer
}
//다른사람 풀이 참조(정규식 이용)

// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach(word => {
//     if (regex.test(word)) answer++;  
//   })

//   return answer;
// }
// ^: 문자열의 시작
// (aya|ye|woo|ma): aya, ye, woo, ma 중 하나와 일치하는 그룹
// +: 앞의 그룹이 하나 이상 반복됨을 나타냄
// $: 문자열의 끝



//삽질 실패이유 : ayaye와 같은 글자는 1개로 치는개 아니라 못하는걸로 해야됨 bow원소들만 온전히 합성한 것 만 가능
// function solution(bow) {
//     const baby = ["aya", "ye", "woo", "ma"];
//     let newBaby = [...baby]
//     // let newBow = [...bow].join('') ;
//     let count = 0;
//     for (let i = 0; i < bow.length; i++) {

//         for (let j = 0; j < newBaby.length; j++) {
//             bow[i].includes(newBaby[j])) {
//             }
//         }
//         count++;
//     } return count

// }

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])) //1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))//3
