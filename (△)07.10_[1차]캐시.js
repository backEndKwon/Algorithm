/*
캐시

lv2
64%


- 제한 사항 -
캐시교체알고리즘 = LRU
cache hit = 1
cache miss = 5

- 입출력 예 - 
캐시크기(cacheSize)	도시이름(cities)	실행시간
3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60
5	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	52
2	["Jeju", "Pangyo", "NewYork", "newyork"]	16
0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	25

전략
*/
function solution(cacheSize, cities) {
  const cache = [];
  const cacheHit = 1;
  const cacheMiss = 5;
  // const lowerCase = cities.map((x) => x.toLowerCase());//이렇게 하면 한번 map돌고 또 for문 돌아야 하니 시간 복잡도가 상승
  let answer = 0;
  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();
    cache.includes(lowerCity) ? (answer += cacheHit) : (answer += cacheMiss);

    if (cache.length < cacheSize) {
      cache.push(lowerCity);
    } else {
      if (cache.includes(lowerCity)) {
        cache.splice(cache.indexOf(lowerCity), 1);
      } else {
        cache.shift();
      }
      cache.push(lowerCity);
    }
  });
  //예외 처리
  if (cacheSize === 0) {
    answer = cities.length * cacheMiss;
  }
  return answer
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ]),
  `==>50`
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ]),
  `==>21`
);
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ]),
  `==>60`
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ]),
  `==>52`
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]), `==>16`);
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]), `==>25`);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Jeju",
    "NewYork",
    "Seoul",
    "Jeju",
    "Rome",
    "Seoul",
  ]),
  `==>16`
);
//세번째 요소인 1을 탐색할 때, [(tail) 제주, 판교, X (head)] -> [(tail) 판교, 제주, X (head)] 이렇게 현재 페이지를 가장 최근 탐색한 페이지의 위치로 변경해야 합니다.
