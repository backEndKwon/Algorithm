/* 
8.4 어떤 집합의 부분집합을 전부 반환하는 메서드

부분집합? 집합A = {1,2,3} 이라면, 집합A의 부분집합은 {}, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3} 이다.
*/

/* 
문제.
어떻게 부분집합들을 나열할 수 있나?
시간복잡도와 공간복잡도의 대강의 계산은?

논리.
우선 공집합을 만들어놓고, 1부터 n까지의 원소를 하나씩 추가해가며 부분집합을 만들어나간다.
이때 N개의 원소가 있다고 가정하면, 해당 원소가 부분집합에 포함? 미포함? 을 확인하기 때문에
2^N개의 부분집합이 생성된다. 따라서 시간복잡도는 O(2^N)이다.
여기에 재귀호출시 현재의 부분집합을 복사하기 때문에 각 원소마다 N번의 복사가 일어나므로
시간복잡도는 O(N*2^N)이다.

공간복잡도는? 재귀호출을 하기때문에, 스택에 쌓이는 공간이 N개가 필요하다.
그리고 재귀호출이 2^N번 일어나므로, 공간복잡도는 O(N*2^N)이다.

구현.
클래스부분
SubsetGenrator 클래스에 constructor 는 result값과 input값을 초기화한다.
메서드부분
getSubsets 메서드는 최종값만 반환.
실제 로직 메서드 부분
backTrack메서드는 재귀호출하며 부분집합 생성
*/

class SubsetGenerator {
  //생성자
  constructor(arr) {
    this.arr = arr;
    this.result = [];
  }

  //부분집합 생성 메서드
  getSubsets() {
    this.backTrack(0, []); // 0번째 인덱스부터 시작하며, 공집합부터 시작한다.
    return this.result; // 사실은 result.length
  }

  backTrack(index, subset) {
    //공집합 먼저 넣어주기
    this.result.push([...subset]);
    //index부터 시작해서 arr.length까지 반복
    for (let i = index; i < this.arr.length; i++) {
        //subset에 arr[i]를 넣어준다.
        subset.push(this.arr[i]);

      this.backTrack(i + 1, subset);
      //subset에서 arr[i]를 빼준다.
      //이렇게 하면, subset에는 arr[i]가 포함되지 않은 상태로 재귀호출이 된다.
      subset.pop();
    }
  }
}

const input = [1, 2, 3];
const subsetGenerator = new SubsetGenerator(input);
console.log(subsetGenerator.getSubsets()); // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
