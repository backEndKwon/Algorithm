/* 
twoSum
https://leetcode.com/problems/two-sum/description/

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

point = may not user the same element twice
*/

// brute force
function solution(nums,target){
    for(let i = 0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            const findNumber = target-nums[i]
            if(nums[j]===findNumber)return [i,j]
        }
    }
}

// 시간복잡도 개선
//hint - map에 내장된 hashtable로 key-value로 찾게 되면 더 빠르다
// map의 기본동작인 "삽입(set)","검색(get)"은 O(1)임
function twoSum(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      //map에 key-value로 저장
       map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
      const findNum = target - nums[i]
      if ( map.has(findNum) &&  map.get(findNum) !== i) return [i,  map.get(findNum)]
    }
  }