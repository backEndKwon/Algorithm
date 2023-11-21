//스킬 체크 테스트 Level.1
 //햄버거


// 아래서부터, 빵 – 야채 – 고기 - 빵

function solution(x) {

const answer = [];
let count = 0;
x.forEach((item,index)=>{
    answer.push(item)
    if(answer.length>=4){
        const correct = answer.slice(-4).join('');
        if(correct === '1231'){
            answer.pop();
            console.log(answer)
            answer.pop();
            console.log(answer)
            answer.pop();
            console.log(answer)
            answer.pop();
            console.log(answer)
            count ++;
        }
    }
})




    //    let count =0 ;
//    for(let i=0; i<x.length; i++){
//         if(x[i-1]===1
//             &&x[i]===2
//             &&x[i+1]===3){
//             count ++;
//         }
//     }
   
//    return count;

}

// console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])) //2
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))//0
// console.log(solution([1, 2, 3]))
console.log(solution([1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1]))