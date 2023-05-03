//체육복

// /n	lost	reserve 	return
// 5	[2, 4]	[1, 3, 5]   	5
// 5	[2, 4]	[3]	         4
// 3	[3]	    [1]	         2

//삽질1

// function solution(n, l, r) {
//     let all = [];//[1,2,3,4,5]
//     for (let i = 0; i < n; i++) {
//         all.push(i + 1);
//     }
//     // l = [2,4]
//     let lost1 = all.filter((x) => !l.includes(x));//[ 1, 3, 5 ][ 1, 3, 5 ][ 1, 2 ]
//     //서로 다른배열중 같은값은 아예 삭제
//     let have = lost1.filter((x) => !r.includes(x));

//     if (have.length === 0) {
//         return all.length
//     } else if (have.length === 1) {
//         return have[0]
//     } else if (have.length > 1) {
//         return have[have.length-1] - have[0]
//     }
// }
function solution(n, lost, reserve) {
    
    // 학생들이 가지고 있는 체육복 수를 모두 1로 세팅
    const all = Array(n).fill(1)    
    // 체육복을 도난당한 학생들의 체육복 수를 0으로
    lost.map((x)=>all[x-1]=0)
    // 여벌을 가지고 있는 학생들의 체육복 수 1 증가
    reserve.map((x)=>all[x-1]+=1)
    for(let i=0; i<n; i++){
    // //     // 체육복이 0개인 학생이 앞사람한테 받아왔을 때 
            if(all[i]===0&&all[i-1]===2){
                all[i] +=1;
                all[i-1] =1;
            }    
        
    // //     // 체육복이 0개인 학생이 뒷사람한테 받아왔을 때 
        else if(all[i]===0&&all[i+1]===2){
            all[i] +=1;
            all[i+1] = 1;
        }
        
    }return all.filter((a)=>a>=1).length

}
    
    // 체육복이 한개 이상인 학생들의 수

console.log(solution(5, [2, 4], [1, 3, 5]))
console.log(solution(5, [2, 4], [3]))
console.log(solution(3, [3], [1]))

// function solution(n, lost, reserve) {
    
//     // 학생들이 가지고 있는 체육복 수를 모두 1로 세팅
//     const clothes = Array(n).fill(1);
    
//     // 체육복을 도난당한 학생들의 체육복 수를 0으로
//     lost.map((lost) => {clothes[lost-1] = 0});
    
//     // 여벌을 가지고 있는 학생들의 체육복 수 1 증가
//     reserve.map(reserve => {clothes[reserve-1] += 1});

//     for(let i=0; i<n; i++){
//         // 체육복이 0개인 학생이 앞사람한테 받아왔을 때 
//         if(clothes[i] === 0 && clothes[i-1] ===2){
//             clothes[i] = 1;
//             clothes[i-1] = 1;
//         }
//         // 체육복이 0개인 학생이 뒷사람한테 받아왔을 때 
//         else if(clothes[i] === 0 && clothes[i+1] === 2){
//             clothes[i] = 1;
//             clothes[i+1]=1;
//         }
//     }
    
//     // 체육복이 한개 이상인 학생들의 수
//     return clothes.filter(c => c > 0).length;
// }