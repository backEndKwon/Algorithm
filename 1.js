const cache = [];
for (let i = 1; i < 4; i++) {
  cache.push(i);
}
cache.shift();
cache.push(5);
console.log(cache);