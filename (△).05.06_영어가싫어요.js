// 영어가 싫어요
// 79%

// numbers	result
// "onetwothreefourfivesixseveneightnine"	123456789
// "onefourzerosixseven"	14067

// 전략 : 최대한 짧고 간결하게, 새로운 메서드 활용
function solution(str1) {
  let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < num.length; i++) {
    str1 = str1.split(num[i]).join(i)
  }
return str1
}
//키포인트 => 영문으로 나눠서 그자리를 i로 메꾸는데 문자열 분리=split, 합치기:join
console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
