/*
가장큰수찾기

array	result
[1, 8, 3]	[8, 1]
[9, 10, 11, 8]	[11, 2]
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return
*/

function solution(array) {
    return[Math.max(...array),array.indexOf(Math.max(...array))]
}