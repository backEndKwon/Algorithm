/* 
1.5 하나빼기
문자열 편집 방법엔 세가지 종류가 있음
1. 문자 삽입
2. 문자 삭제
3. 문자 교체
두개 문자열이 주어졌을 때 같게 만들기 위한 편집회수가 1회이내이면 true, 아니면 false
*/
/* 
전략
class로 삽입, 삭제 교체 구현
1. 문자열 길이가 같으면 교체
 - 앞의 자리부터 확인, falsecount가 2이상이면 false
2. 문자열 길이가 다르면 삽입, 삭제
 - st1와 str2 길이가 더 큰거를 기준으로 앞자리 부터 삭제  
 - 앞자리 부터 삭제
*/
const isOneEdit1 = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  // 문자열 길이가 같으면 교체
  if (len1 === len2) {
    // - 앞의 자리부터 확인, falsecount가 2이상이면 false
    let count = 0;
    for (let i = 0; i < len1; i++) {
      if (str1[i] !== str2[i]) count++;
    }
    return count > 1 ? false : true;
  } else {
    // 문자열 길이가 다르면 삽입 삭제
    // st1와 str2 길이가 더 큰거를 기준으로 앞자리 부터 삭제
    if (len1 > len2) {
      for (let i = 0; i < len1; i++) {
        if (str1[i] !== str2[i]) {
          str1.splice(i, 1); // 이거 때문에 시간복잡도가 O(n^2)이 됨
          if (str1 === str2) {
            return true;
          }
          return false;
        }
        return true;
      }
    }
  }
};
const isOneEdit = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  /* 수정해야할 부분이 2개 이상이면 아예 false */
  if (Math.abs(len1 - len2) > 1) {
    return false;
  }

  let count = 0;
  let i = 0; // =>str1
  let j = 0; // =>str2

  while (i < len1 && j < len2) {
    if (str1[i] !== str2[j]) {
      // 수정해야할 부분이 있으면 count ++
      count++;
      // 수정해야할 count가 2개 이상이면 false
      if (count > 1) {
        return false;
      }
      if (len1 > len2) {
        i++; // str1[i+1]과 str2[j]를 비교하기 위해
      } else if (len1 < len2) {
        j++; // str1[i]와 str2[j+1]을 비교하기 위해
      } else {
        i++; // str1[i+1]과 str2[j+1]을 비교하기 위해
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
};
console.log(isOneEdit("pale", "ple")); // true
console.log(isOneEdit("pales", "pale")); // true
console.log(isOneEdit("pale", "bale")); // true
console.log(isOneEdit("pale", "bake")); // false
console.log(isOneEdit("pal", "pale")); // true
