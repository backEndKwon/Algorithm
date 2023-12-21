function findLongestWord(words) {
    let wordSet = new Set(words);//중복제거용
    let longestWord = '';
  
    for (let word of words) {
      // 단어를 조합하여 만들 수 있는 경우에만 확인
      if (isMadeOfOtherWords(word, wordSet)) {
        // 현재 단어가 현재까지의 가장 긴 단어보다 길면 업데이트
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      }
    }
  
    return longestWord;
  }
  
  function isMadeOfOtherWords(word, wordSet) {
    // 재귀적으로 단어를 분리
    for (let i = 1; i < word.length; i++) {
      let prefix = word.substring(0, i);
      console.log("👉 ~ prefix:", prefix)
      let suffix = word.substring(i);
      console.log("👉 ~ suffix:", suffix)
  
      if (wordSet.has(prefix) && (wordSet.has(suffix) || isMadeOfOtherWords(suffix, wordSet))) {
        console.log("👉 ~ isMadeOfOtherWords(suffix, wordSet):", isMadeOfOtherWords(suffix, wordSet))
        return true;
      }
    }
  
    return false;
  }
  
  // 테스트
  const words = ['cat', 'banana', 'dog', 'nana', 'walk', 'er', 'dogwalker'];
  const result = findLongestWord(words);
  console.log(result);  // 출력값은 'dogwalker'
  