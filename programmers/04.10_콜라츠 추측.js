//콜라츠 추측
// n= 2x => /2 > *3 > /2 진행
//n= 2x-1 => *3 > /2 진행
//n=1 =>0
//count >= 500=> -1

// n	result
// 6	8
// 16	4
// 626331	-1
//첫 삽질
// function solution(num) {
//     let sum = 0;
//     if(num ===1){
//         return 0
//     }
//     //6 > 8 / 16>4
//     ///keypoint => num가 1이 되었을대 스탑!
//     for (let i = 0; i<; i++) {
       
//         if(num ===1){
//             sum+= i;
//             break ;
//         }else if(num % 2 === 0) {
//             num = num / 2;
//             sum+= i;
//         }else if (num % 2 === 1) {
//             num = (num * 3) +1;
//             sum+= i;
//         }
        
//     }
//     return sum >= 500 ? -1 : sum;
// }


//두번쨰 도전
function solution(num) {
    
   //while을 써보자
    if( num===1){
        return 0;
    }
    let sum = 0
    //첫번째 실수 num ===1이라고 함. while조건식을 이해못했음
    //조건식이 ture?그럼 계속 돌아! false? 당장 멈춰(break를 할 필요가 없음)
    while(num != 1){
        if(num%2===0){
            num = num/2;
            sum ++;
        }else if(num%2!=0){
            num = num*3+1;
            sum++;
        }//밑에 if문을 처음엔 밖에 두었는데 return과 sum이 겹치니까 겹치지 않게 
        if(sum>=500){
            return -1
        }    
    }return sum
}

console.log(solution(1))
console.log(solution(6))
console.log(solution(16))
console.log(solution(626331))