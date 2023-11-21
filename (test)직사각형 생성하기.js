/* 
직사각형 3개의 좌표가 주어졌을떄 나머지 좌표를 구하는 문제
배열로 주어짐
v= [[1, 4], [3, 4], [3, 10]] => [1, 10]
v= [[1, 1], [2, 2], [1, 2]] => [2, 1]
*/
/* 
10초
메모리제한 2gb
*/
const solution = (V)=>{
//x좌표, y좌표끼리 배열을 모아서 하나씩만 나오는 값으로 리턴
const x = V.map((v)=>v[0]); //공간복잡도 O(N), 시간복잡도 O(N)
const y = V.map((v)=>v[1]);

//filter와 indexOf,lastIndexOf의 해당 값에 대한 위치값을 이용하여 1개만 나오는 값을 리턴
const x1 = x.filter((v)=>x.indexOf(v)===x.lastIndexOf(v));
//index 검색 하나당 시간복잡도 O(N)이므로 전체 시간복잡도는 O(N^2)
const y1 = y.filter((v)=>y.indexOf(v)===y.lastIndexOf(v));

//리턴된 값들을 하나의 배열로 만들어서 리턴
// return x1.concat(y1); //공간복잡도 O(N)
return [x1[0],y1[0]]; //공간복잡도 O(1)

}
/* 
시간복잡도 O(N^2), 공간복잡도 O(N)
전체적인 공간복잡도는 O(N)이지만, RETURN로직을 변경해줌으로써 실제 메모리 사용량은 더 줄일 수 있음
*/

console.log(solution([[1, 4], [3, 4], [3, 10]]))
// console.log(solution([[1, 1], [2, 2], [1, 2]]))