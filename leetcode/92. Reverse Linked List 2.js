/* 
https://leetcode.com/problems/reverse-linked-list-ii/
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/* 

1. 문제 요점
 - left부터 right까지만 뒤집어서 해당 배열을 반환해라
 - left,right의 값은 index+1과 같이 되어있음
2. 접근
우선은 어떻게 reverse를 할 것인가?
206에서 했던 node의 포인터만 바꿔주기
left에서 right까지 범위가 있는데 범위는 어떻게 설정할 것인가?
for문으로? 안됨, 배열의 길이를 모름
left부터 어떻게 reverse할지?
gpt 힌트
(1) 두 포인터 사용, (2) 연결리스트 노드의 임시저장, (3) 포인터 이동과 반복
left를 세는 건 count를 이용?!

1 > 2> 3> 4> 5 에서 1 2<3<4 5 와 같이 1,5에 대한 node를 가지고 잇는 상태에서 2~4뒤집어 놓기
 그런다음 다시 연결시키기

*/
let reverseBetween = function (head, left, right) {
  // left만나기전 left와 right사이 right 후로 나눠서 배열에 넣어준 후 나중에 listnode해 넣어주기
  if (!head || left === right) return head;

  const beforeLeft = [];
  const betweenLeftAndRight = [];
  const afterRight = [];
  let node = head;
  let cnt = 1; //index 용
  while (node !== null) {
    // linkedList가 null이 될때까지
    // (*그냥 node로 써도 되지만 최대한 직관적으로 표시해보기)
    if (cnt < left) {
      beforeLeft.push(node.val);
    } else if (cnt >= left && cnt <= right) {
      betweenLeftAndRight.push(node.val);
    } else {
      afterRight.push(node.val);
    }
    node = node.next; //이거 중요함 다음 node는 node의 next를 실행시키기 위해
    cnt++;
  }
  //   //만들어진 배열 확인
  console.log("👉 ~ beforeLeft:", beforeLeft);
  console.log("👉 ~ betweenLeftAndRight:", betweenLeftAndRight);
  console.log("👉 ~ afterRight:", afterRight);

  // 생각해볼 부분 between 배열들을 먼저 reverse로 하고 넣는 것과 그냥 pop, shift로 하는 것의 차이?
  // 당연히 뺄 수 있다면 빼는 게 났다.(단 가독성은 reverse가 좋은듯) 시간복잡도는 O(N)으로 동일하지만 reverse가 없는 O(n)이 더 빠르다.
  //뒤에거 먼저 넣어야됨

  /* 이 부분이 반복되는 부분같고 굉장히 각 while에 들어간 표현 들이 비슷하여
  모듈화를 할 수 있을 것 같다는 생각이 든다 */
  //   let result;
  //   let pre = null; //여기에 계속해서 꼬랑지node들 붙일거임(시작은 null)
  //   while (afterRight.length) {
  //     result = new ListNode(afterRight.pop(), pre); //처음엔 null값들어가겠지?
  //     //그런다음
  //     pre = result;
  //     //pre값을 result로 해주면 그다음 꼬랑지node는 계속해서 그 다음 것들이 붙겠다.
  //   }
  //   while (betweenLeftAndRight.length) {
  //     result = new ListNode(betweenLeftAndRight.shift(), pre);
  //     pre = result;
  //   }
  //   while (beforeLeft.length) {
  //     result = new ListNode(beforeLeft.pop(), pre);
  //     pre = result;
  //   }
  function createResult(array, pre) {
    let result = pre;
    while (array.length) {
      const newNode = new ListNode(array.pop(), pre); //새로운 node
      newNode.next = result;//이 result는 이전 꼬랭지들 값
      result = newNode; // 현재 result에 꼬랭지 앞의 값인 newNode할당
    }
    return result;
  }
  //   let result;
  let pre = null; // 외부에 있어야 3가지 경우 다 붙여서 사용할 수 있지. 안에 잇으면 초기화됨

  pre = createResult(afterRight, pre);
  pre = createResult(betweenLeftAndRight.reverse(), pre);
  pre = createResult(beforeLeft, pre);
  return pre;
};

// const list = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
const list = new ListNode(3, new ListNode(5));
console.log(reverseBetween(list, 1, 2));
// console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4)); // expected [1,4,3,2,5]
// console.log(reverseBetween([5], 1, 1)); // expected [5]
