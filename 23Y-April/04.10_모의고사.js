//모의고사

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4	...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
//가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
//   answers	    return
// [1,2,3,4,5]	      [1]
// [1,3,2,4,2]	    [1,2,3]


//전략 : 각 사람별 답은 반복문임 =>  answer와 비교할수있는 배열 세팅, 문제 별 맞은 갯수 카운팅
//      (1) 배열>count세팅>for문으로 제출한 학생답과 실제 답안 비교 > 세개의 값 비교해서 결과값 반환
//      (2) keypoint :  세개의 값 비교 해서 1,2,3 정렬시키기...(최대값 Math.max(...배열명)으로 해야댐 왜냐하면 Math사용법이 원래 Math.max(1,2,3,4,5)중 최대값고르는거라 []이 없음
// //삽질 1
// function solution(answers) {
//     let person1 = [1, 2, 3, 4, 5];
//     let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
//     let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     let ok1 = 0;
//     let ok2 = 0;
//     let ok3 = 0;
//     let answer = [];
//     for (let i = 0; i < person1.length; i++) {
//         if (person1[i] === answers[i]) ok1++
//     }
//     for (let i = 0; i < person2.length; i++) {
//         if (person2[i] === answers[i]) ok2++
//     }
//     for (let i = 0; i < person3.length; i++) {
//         if (person3[i] === answers[i]) ok3++
//     }

//     //ok 3개 값을 비교하기 for / 최대값구하기

//     answer.push(ok1, ok2, ok3)
//     let max = Math.max(...answer)
//     let count = 0;
//     //answer내부에 max랑 똑같은 값이 있는지 확인하는 for문
    
//     let arrange = []
//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] === max) {
//             count++;
//         }
        
//         if (count=== 2) {
//             if (answer[i] === max) {
//                 arrange.push(answer.indexOf(answer[i]))
//             }  
//             arrange.push()
//         }else if(count === 3){
//             return [1,2,3]
//         }
//     }


//     //answer는 ok차례대로 순서 매긴 값이기 때문에 그 ok아..그러네 순위를 어떻게 매겨 중복된 값이 2개인데
//     //1이랑 3이랑 점수 같으면 
//     //max랑 똑같은 값이 하나만 있다면

//     // if (count === 1) {
//     //     return [answer.indexOf(max) + 1];
//     // } else if (count > 1) {
//     //     return arrange.sort()
//     // } //각 맞춘개수 정수


    
// }


function solution(answers) {
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//answers = [1,2,3,4,5,6,7]
    let ok1 = 0;
    let ok2 = 0;
    let ok3 = 0;
    let answer = [];
    for (let i = 0; i <answers.length; i++) {
        if (person1[i%person1.length] === answers[i]) ok1++
        if (person2[i%person2.length] === answers[i]) ok2++
        if (person3[i%person3.length] === answers[i]) ok3++
    }

    //ok 3개 값을 비교하기 for / 최대값구하기

    answer.push(ok1, ok2, ok3)
    let max = Math.max(...answer)
    let answer1 =[]
    

    ///이게 키포인트!!
    if(max===ok1) {answer1.push(1)}  
    if(max===ok2) {answer1.push(2)}
    if(max===ok3) {answer1.push(3)}

    return answer1
}



console.log(solution([1, 2, 3, 4, 5]))
console.log(solution([1, 3, 2, 4, 2])) 