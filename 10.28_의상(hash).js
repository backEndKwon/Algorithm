/* 
의상
해시
https://programmers.co.kr/learn/courses/30/lessons/42578

clothes	return
[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
*/

/* 
[설계]
clothes길이 = n, for문으로 n만큼 돌면서 cloth[i] = {cloth,type} 형태로 꺼내기
type별 몇개있는지 count ++
return 값은 n + count 
총 4가지 type
 => for문 돌면서 이미 있던 type이면 count++
공식이 나올것 같은데..

예제
["green_turban", "headgear"],
["yellow_hat", "headgear"],
["crow_mask", "face"],
["blue_sunglasses", "eyewear"],
총 11개 4+2+1+1+1+1+1
gh yh c b c+b (gh+c gh+b gh+c+b) (yh+c yh+b yh+c+b)
*/
/* 
규칙 hint
1) 의상의 종류가 "1가지"인 경우. ( 의상 A가 a 개 )
a
2) 의상의 종류가 "2가지"인 경우. ( 의상 A a개, 의상 B, b개 )
a+b+ab
(a+1)(b+1)-1
3) 의상의 종류가 "3가지"인 경우. ( 의상 A a개, 의상 B, b개, 의상 C c개)
a+b+c+ab+ac+bc+abc
(a+1)(b+1)(c+1)-1
결국 type당 몇가지 의상이 있는지 구해야됨
*/
const clothesSetting = (clothes)=>{
  
}

const solution = (clothes) => {
  const cloth = {};
  clothes.forEach(([name, type]) => {
    if (cloth[type] === undefined) {
      cloth[type] = [name];
    } else {
      cloth[type].push(name);
    }
  });

  let answer = 1;
  // object.entries => [[key,value],[key,value]] 객체를 배열로 바꾸어 for문 돌리는 법
  for (const [name, type] of Object.entries(cloth)) {
    const x = type.length;
    answer *= x + 1;
  }
  return answer - 1;
};

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
console.log(
  solution([
    ["green_turban", "headgear"],
    ["yellow_hat", "headgear"],
    ["crow_mask", "face"],
    ["blue_sunglasses", "eyewear"],
  ])
); // 11
