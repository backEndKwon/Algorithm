/* 
구명보트 42885
(Greedy:탐욕알고리즘)

people	limit	return
[70, 50, 80, 50]	100	3
[70, 80, 50]	100	3
[30, 30, 60] 160
[10,50,100] 160

구명보트는 한번에 최대 2명씩 밖에 탈 수 없고, 무게 제한이 있음

목표 : 구명보트를 최대한 적게 사용하여 모든 사람을 구출
*/

/* 

*/

const solution = (people, limit) => {
  // sort = nlogn , max = n
  people.sort((a, b) => b - a);
  console.log(people);
  let left = 0;
  let right = people.length - 1;
  let count = 0;
  // 80, 70, 50 ,50
  /* 
  L=0, R=3 / 80+50 = 130 > 100
right--  80, 50
L=0, R=2 / 80+50 = 130 > 100
right--  80, 70
L=0, R=1 / 80+70 = 150 > 100

80+70 = 150 > 100
  */
  while (left <= right) {
    // console.log("===========> ~ people[left]:", people[left]);
    // console.log("===========> ~ people[right]:", people[right]);
    if (people[left] + people[right] <= limit) {
      right--;
      left++
    } else {
      left++;
    }

    count++;
    // console.log(" L / R ", left, "/", right);
    // console.log("count ", count);
    // console.log("================================");
  }
  return count;
};

console.log(solution([70, 50, 80, 50], 100)); // 3
// console.log(solution([70, 80, 50], 100)); // 3
// console.log(solution([30, 30, 60], 160));
// console.log(solution([10, 50, 100], 160));
