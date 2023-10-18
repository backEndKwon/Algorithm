/* JadenCase 문자열 만들기
s	return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	"For The Last Week" 
*/

const solution = (s) => {
  const words = s.toLowerCase();
  count = 0;
  const answer = words
    .split(" ")
    .map((word) => {
      let x = word.split(""); //3,p,e,o,p,l,e
      if (x[0] != null) x[0] = x[0].toUpperCase();
      return x.join("");
    })
    .join(" ");
  console.log(count);
  return answer;
};

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("a b"));
console.log(solution("avvvB"));
console.log(solution("avv   vB"));
