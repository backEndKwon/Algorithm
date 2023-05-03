//키패드 누르기

// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"

// [1,2,3]
// [4,5,6]LRLLLRLLRRL
// [7,8,9]
// [*,0,#]

// function solution(numbers, hand) {
//     let y = [3, 6, 9, '#'];
//     let c = [2, 5, 8, 0];
//     let x = [1, 4, 7, '*'];
    
    
//     let answer = []
//     // 시작부분
//     for (let i = 0; i < numbers.length; i++) {
//         if (hand === "right") {
//             if (x.includes(numbers[i])) {
//                 answer.push('L');
//             } else if (y.includes(numbers[i])) {
//                 answer.push('R');
//             } else { answer.push('R') }
//         } else if (hand === "left") {
//             if (x.includes(numbers[i])) {
//                 answer.push('L');
//             } else if (y.includes(numbers[i])) {
//                 answer.push('R');
//             } else { 
                
//                 for(let j=0; j<c.length; j++){
//                     if(numbers[i]===x[j]){

//                     }
//                 }
//              }
//         }


//     }return answer.join('')
// }



function solution(numbers, hand) {
    let y = [3, 6, 9, '#'];
    let c = [2, 5, 8, 0];
    let x = [1, 4, 7, '*'];
    
    const grid = [

        [0,3], [1,3], [2,3],

        [0,2], [1,2], [2,2],

        [0,1], [1,1], [2,1],

        [0,0], [1,0], [2,0]

];

// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
    
function dis(xl,xr,x,hand, grid){
    const leftd = Math.abs(grid[xl][1]-grid[x][1]) + Math.abs(grid[xl][0]-grid[x][0])
    const rightd = Math.abs(grid[xr][1]-grid[x][1]) + Math.abs(grid[xr][0]-grid[x][0])
    if(leftd===rightd){
        if(hand === 'left'){
            answer.push('L');
        }answer.push('R');
    }
    return leftd < rightd ? 'L' : 'R'
}


var sum = ''
var xr = '*';
var xl= '#'

    for(x of numbers){
        if(x%3 === 0){
            sum += 'R'
            xr = x
        }else if(x%3 === 2){
            sum += 'L'
            xl = x
        }else{

            sum += dis(xl,xr,x,hand)
            sum[sum.length-1] === 'L'? xl = x : xr = x
        }

    }
    return sum

}
console.log("답 LRLLLRLLRRL=== ",solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))

console.log("답 LRLLRRLLLRR === ",solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))

console.log("답 LLRLLRLLRL === ",solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"))



   



// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
// function solution(numbers, hand) {
//     let y = [3, 6, 9, '#'];
//     let c = [2, 5, 8, 0];
//     let x = [1, 4, 7, '*'];
    
//     const grid = [

//         [0,3], [1,3], [2,3], //0,1,2

//         [0,2], [1,2], [2,2], //3,4,5

//         [0,1], [1,1], [2,1], //6,7,8

//         [0,0], [1,0], [2,0] //9,10,11

// ];
//     if(numbers[i])
   

    
// }// let answer = []
    // // 시작부분
    // for (let i = 0; i < numbers.length; i++) {
    //     if (hand === "right") {
    //         if (x.includes(numbers[i])) {
    //             answer.push('L');
    //         } else if (y.includes(numbers[i])) {
    //             answer.push('R');
    //         } else { answer.push('R') }
    //     } else if (hand === "left") {
    //         if (x.includes(numbers[i])) {
    //             answer.push('L');
    //         } else if (y.includes(numbers[i])) {
    //             answer.push('R');
    //         } else { 
    //             if(numbers[i]===2){
                        
    //                 grid[1][1] grid[numbers[numbers.lastIndexOf('L')]] grid[numbers[numbers.lastIndexOf('R')]-1]

    //             }else if(numbers[i]===5){

    //             }else if(numbers[i]===8){
                    
    //             }else if(numbers[i]===0){
                    
    //             }
    //          }
    //     }


    // }return answer.join('')