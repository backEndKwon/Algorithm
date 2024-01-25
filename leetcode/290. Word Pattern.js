/* 
[ 'dog', 'cat', 'cat', 'fish' ]
pattern :  0
ss :  0
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
let wordPattern = function (pattern, s) {
    ss = s.split(" ")
    console.log(pattern)
    console.log(ss)
    for (let i = 0; i < ss.length; i++) {
        console.log("pattern : ", pattern.indexOf(pattern[i]))
        console.log("ss : ", ss.indexOf(ss[i]))

        if (pattern.indexOf(pattern[i]) === ss.indexOf(ss[i])) {
            return true
        }
        console.log("------------")
    }
    return false
};

console.log(wordPattern("abba","dog cat cat dog")) // expected true
console.log(wordPattern("abba","dog cat cat fish")) // expected false
console.log(wordPattern("aaaa","dog cat cat dog")) //expected false

// /* indexOf는 이렇게 사용된다. */

// const 동물 = ["곰", "사자", "뱀", "곰", "호랑이", "곰", "여우", "강아지"];
// const 숫자 = [1,2,3,4]
// console.log(동물.indexOf("곰")) // expected 0
// console.log(숫자.indexOf(3))  // expected 2
// console.log(동물.indexOf("곰",1))  // expected 3
// console.log(숫자.indexOf("곰"))  // expected -1

// /* 개념정리 */
// // 1. 주어진 배열의 요소들에서 찾을 수 있는 첫번째 index를 반환
// // 2. indexOf("찾는 문자/숫자열",몇번째 인덱스부터 찾기 시작할 것인지)
// // 3. 없는 값이라면 -1 반환
