//스킬 체크 테스트 Level.1 
//  //장애물
//  공원을 나타내는 문자열 배열 park,
// 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때, 
//로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 
//순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.
// ["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
// ["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
// ["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]

function solution(x) {
   let count =0 ;
   for(let i=0; i<x.length; i++){
        if(x[i-1]===1
            &&x[i]===2
            &&x[i+1]===3
            ||x[i+2===1]){
            count ++;
        }
    }
   
   return count;

}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])) //2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))//0
console.log(solution([1, 2, 3]))
console.log(solution([1, 1,1, 2, 3,1, 2, 3]))
console.log(solution([1, 1,1, 2, 3,1, 2, 1]))