/* 
100. same tree

Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false

Input: p = [1,2,1], q = [1,1,2]
Output: false

*/
/* 
내 풀이.
일단 길이 비교해서 다르면 false로 일차 거르기
for문을 통해서 p와 q의 값을 비교? 하는 것이 효과적일까?
일단 그렇게 되면 시간복잡도는 O(N)임
*/
let isSameTree = function (p, q) {
  //1차 거르기: 길이가 다르면 false반환
  if (p.length !== q.length) {
    return false;
  } else {
    for (let i = 0; i < p.length; i++) {
      if (p[i] !== q[i]) {
        return false;
      }
    }
    return true;
  }
};

// // 만약 이진트리가 제공된다면?(리트코드에서 처럼)
// 이게 시간 복잡도가 보통 이진트리가 O(logN)이므로 위의 코드보다 효율적임
// var isSameTree = function(p, q) {
//     if(!p && !q) return true;
//     if(!p || !q) return false;
//     if(p.val !== q.val) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

console.log(isSameTree([1, 2, 3], [1, 2, 3]));
console.log(isSameTree([1, 2, 3], [1, null]));
console.log(isSameTree([1, 2, 1], [1, 1, 2]));
