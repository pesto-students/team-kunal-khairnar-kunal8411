function memoize(fn) {
  const cache = {};
  
  return function (...args) {
      const key = args.toString();
      
      if(cache.hasOwnProperty(key)) {
          console.log("Result from cache");
          return cache[key];
      }
      
      const result = fn(...args);
      cache[key] = result;
      return result;
  };
}

function add(a,b) {
  return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100)); // returns 200
console.log(memoizeAdd(100, 200)); // returns 300
console.log(memoizeAdd(100, 300)); // returns 400
console.log(memoizeAdd(100, 100)); // returns 200 without computing