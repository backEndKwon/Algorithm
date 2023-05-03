//특이한 정렬


// numlist	n	result
// [1, 2, 3, 4, 5, 6]	4	[4, 5, 3, 6, 2, 1]
// [10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000]
//삽질
// function solution(num, n) { 
//   // let num1=  num.sort((a,b)=>a-b);
//   let answer1 = [];
//   let answer = new Array(num.length).fill([]);
//   let num1 = [];
//   for(let i = 0 ; i<num.length; i++){//[10000,20,36,47,40,6,10,7000]      [1, 2, 3, 4, 5, 6]
   
//    num1.push(n-num[i]);
   
//     answer1.push(Math.abs(n-num[i]))//[ 6, 10, 10, 17, 20, 24,6970, 9970] [ 0, 1, 1, 2, 2, 3 ]
//     answer1.sort((a,b)=>a-b)
//      answer[i].push(num1[i]+n)

//     }

// return answer
//   }
function solution(num, n) { 

  return num.sort((x,y)=>{
    if(Math.abs(x-n)===Math.abs(y-n)) return y-x;
    return Math.abs(x-n)-Math.abs(y-n)
  })

  }
console.log(solution([1, 2, 3, 4, 5, 6],4))//0
// console.log(solution([10000,20,36,47,40,6,10,7000],30))//0


