// 피자 나눠 먹기 (2)

//접근방식 :  6조각=1판 N명에서 나눠먹는데 나눠지는 값 0


function solution(n) {

  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n === 0) {
      return i
    }
  }
}