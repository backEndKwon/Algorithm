/* 
203. Remove Linked List Elements
https://leetcode.com/problems/remove-linked-list-elements/description/
*/

// * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/* 
우선 head값에 val값이 있는지 확인
없다면 해당 head반환 있다면 모두 삭제후 반환 
(많은 사람들이 왜 삭제대신 값의 이동을 택했을까? 에 대한 고찰 필요=>blog에 적어놓기)
// 값의 이동으로 삭제를 구현한다면?
 - head값이 빈 값이라면 빈배열 반환, head의 값이 입력값과 동일하지만 next가 null이라면 그 또한 빈배열 반환

 - 만약 head의 val값과 input된 val값이 같다면?
 - 해당 head에 head.next를 넣는다.
*/

var removeElements = function (head, val) {
  if (!head) return null;
  if (head.next === null && head.val === val) return null;

  //head의 next가 null일때까지 계속해서 탐색
  //만약 head의 val와 value가 같다면?
  //현재 head에 head의 next를 넣어준다
  //다른 힌트 => 만약 head.val과 val이 같은 경우 어차피 그 값은 없어도 되니 head의 next를 remove함수에 넣어주고 val값을 계속 찾게끔 iterable돌리기
  if (head.val === val) {
    ///return으로 현재 노드는 무시하고 removeElments 함수에 인자값 대입후 진행
    return removeElements(head.next, val);
  }
  //만약 head.val과 val이 다를 경우
  //현재 노드의 값은 유지하면서 다음 head.next에 대한 값을 비교
  else {
    head.next = removeElements(head.next, val);
    console.log("👉 ~ head.next:", head.next)
    console.log("👉 ~ head:", head)
    return head;
  }
};

const head = new ListNode(
  1,
  new ListNode(
    6,
    new ListNode(3, new ListNode(4, new ListNode(9, new ListNode(6))))
  )
);
const val = 6;
//expected = 1,3,4,5
console.log(removeElements(head, val));
