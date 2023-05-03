


//최대공약수와 최소공배수

// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]


function solution(x,y){

    

    const gcd = (x,y) => x%y === 0 ? y : gcd(y, x%y)
    const lcm = (x,y) => x*y / gcd(x,y)
   
    return [gcd(x,y),lcm(x,y)]
}

console.log(solution(3, 12))
// console.log(solution(2, 5))