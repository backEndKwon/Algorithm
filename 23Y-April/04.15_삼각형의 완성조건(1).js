//삼각형의 완성조건(1)


function solution(sides) {

  sides.sort()
  let x = Math.max(...sides)
  if (sides[0] + sides[1] <= x) {
    return 2
  } return 1
}

console.log(solution([1, 2, 3]))

console.log(solution([3, 6, 2]))

console.log(solution([199, 72, 222]))