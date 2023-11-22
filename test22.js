/* 
H-INDEX
42747

citations	return
[3, 0, 6, 1, 5]	3

어떤 과학자가 발표한 논문 n편 중, 
h번 이상 인용된 논문이 h편 이상이고 
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
*/

/* 
이해x
*/
const solution = (citations) => {
  let answer = 0;
  citations = citations.sort((a, b) => b - a);
  let arr = [];
  for (let i = 0; i < citations.length; i++) {
    /* for문돌때마다 arr에 삽입 */
    arr.push(citations[i]);
    /* arr의 길이가 citations[i]크게되면 break 그렇지 않으면 answer ++ */
    console.log("answer:", answer, "citations[i]:", citations[i])
    console.log("===========> ~ arr.length:", arr.length)
    if (arr.length > citations[i]) {
      break;
    }
    console.log("---------------------------")
    answer++;
  }

  return answer;
};

console.log(solution([3, 0, 6, 1, 5])); // 3
// console.log(solution([9, 9, 9, 9, 1])); // 4
