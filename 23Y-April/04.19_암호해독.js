//암호해독 23.04.19

// cipher	code	result
// "dfjardstddetckdaccccdegk"	4	"attack"
// "pfqallllabwaoclk"	2	"fallback"


function solution(cipher, code){

    let answer=[];
    for(let i = 1 ; i<=cipher.length; i++){
    answer.push(cipher[code*i-1])
    }
    return answer.join('')
}


console.log(solution("dfjardstddetckdaccccdegk", 4))
console.log(solution("pfqal lllabwaoclk", 2))
console.log(solution("abc", 1))


   
// cipher.split(''): cipher 문자열을 한 글자씩 분리한 배열을 만듭니다. 예를 들어, cipher가 "abcde"이면, 배열은 ["a", "b", "c", "d", "e"]가 됩니다.
// filter((v,i)=>(i+1)%code===0): 배열의 각 요소에 대해 filter 함수를 호출하여, code 값에 의해 나누어 떨어지는 인덱스의 요소만 필터링합니다. 예를 들어, code가 2이면, 인덱스가 1, 3, 5인 요소들만 남습니다.
// join(''): 필터링된 배열의 요소들을 다시 문자열로 결합합니다.
// 따라서, 예를 들어 cipher가 "abcdef"이고, code가 3인 경우, filter 함수는 배열에서 인덱스가 2와 5인 요소를 남길 것입니다. 그리고 join 함수는 이 요소들을 다시 "cf" 문자열로 결합하여 반환합니다.filter는 배열의 각 요소를 조건에 따라 필터링하여 새로운 배열을 반환하는 배열 메소드입니다.

// filter는 다음과 같은 형식으로 사용됩니다.

// c
// Copy code
// array.filter(callback(element[, index[, array]])[, thisArg])
// callback: 각 요소를 검사하는 함수로, true를 반환하는 요소만 필터링됩니다. 이 함수는 세 개의 인수를 받습니다.
// element: 현재 검사 중인 요소
// index(선택적): 현재 요소의 인덱스
// array(선택적): filter 메소드를 호출한 배열
// thisArg(선택적): callback 함수 내에서 this로 사용될 값
// 예를 들어, 다음은 1부터 10까지의 숫자 중에서 홀수만 필터링하여 새로운 배열을 만드는 코드입니다.

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = numbers.filter(num => num % 2 === 1);
// console.log(oddNumbers); // [1, 3, 5, 7, 9]
// 위 코드에서 filter 메소드는 numbers 배열의 각 요소를 num 매개변수로 받아, num % 2 === 1 조건을 만족하는 요소만 새로운 배열로 필터링합니다. 이렇게 하면 oddNumbers 배열에는 [1, 3, 5, 7, 9]가 저장됩니다.