/* 
206. Reverse Linked List
*/
// *
//  * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // console.log(head.next)

    // list Node의 포인터만 바꿔주기
    let current = null
    let prev = null
    while (head) {//head의 값이 있을 동안 계속 진행 null발견시 종료
        current = head.next //현재(실제론 다음)값은 현재값의 next값 
        // ex) head가 new ListNode(1, new ListNode(2, new ListNode(3)))이거라면, new ListNode(2, new ListNode(3))
        // console.log("current : ", current)
        head.next = prev // 이 행위를 통해 순서를 역전시킨다.
        // ex) 왜냐면 head의 next인 다음값들이 앞으로 가야되기 때문에
        // console.log("head.next : ",head.next)

        prev = head 
        //ex) head가 new ListNode(1, new ListNode(2, new ListNode(3)))일때 prev 는 1로 임
        // console.log("prev : ", prev)
        //그럼 지금의 head는 어떻게 되어야하나?
        head = current // 첫번째쭐 current = head.next와 맞춰주면서 계속 while문 진행할 수 있게 금
    }
    return prev
}
const list = new ListNode(1, new ListNode(2, new ListNode(3)));

// 함수 호출 및 결과 출력
console.log(reverseList(list));

// console.log(reverseList([1, 2, 3, 4, 5])); //expected [5,4,3,2,1]
