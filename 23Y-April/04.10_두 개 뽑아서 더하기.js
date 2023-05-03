//2개 뽑아서 더하기

// numbers배열 요소 서로다른 인덱스에 있는 숫자 2개 더해서 새로운 배열 만들어, 정렬시키기
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
////   answer배열 값은 중복 안됨
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

//전략 : (1) i와 j번째를 더할건데 j는 i가 되면 안됨(i != j)
//       (2) 더한 값을 push()를 이용하여 answer에 넣기
//       (3) 최종 answer배열을 정렬화 answer.sort((a,b)=>a-b)
//       (4) 중복값 제거를 위해 new Set() 사용 => 단 new Set() 은 배열이 아니라 객체임!
//       (4-1) new Set() 사용 -> new Set() 속 요소들 풀어놓는 작업 -> 객체에서 배열로 바꿔주기

      
function solution(n) {
    var answer1 = [];
    for(let i = 0; i<n.length; i++){
        for(let j = 0; j<i; j++){           
            i != j ? answer1.push(n[i]+n[j]) : false
        }
    }
    var answer = [...new Set(answer1)].sort((a,b)=>a-b)
    
    return answer;
}

console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))