//외계어 사전

// spell	dic	result
// ["p", "o", "s"]	["sod", "eocd", "qixm", "adio", "soo"]	2
// ["z", "d", "x"]	["def", "dww", "dzx", "loveaw"]	1
// ["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	2

//다른분 풀이 : sort,join ,map find(callback)활용
function solution(spell, dic){
    spell = spell.sort().join('')
    return  dic.map((word)=>word.split('').sort().join('')).find((word)=>word === spell) ? 1 :2
}


console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); //11
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //120
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])); 
//삽질질
// function solution(spell, dic) {
//   let answer = 0;

//   for (let i in dic) {
//     let dics = dic[i];

//     for (let j in spell) {
//       if (dics.includes(spell[j])) {
//         dics = dics.replace(spell[j], "X");
//       }
//     }
//     dics = dics.replace(/X/gi, "");
//     if (dics.length===spell.length&&dics === null){
        
//       answer += 1;
//     }
//   }
//   if(answer===0){
//     return 2
//   }else{return 1}
// }

//120
