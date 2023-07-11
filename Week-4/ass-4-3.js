const fibonacci = {
  [Symbol.iterator]() {
    let previousNum = 0;
    let currentNum = 1;
    let count = 0;

    return {
      next() {
        if (count === 0) {
          count++;
          return { value: 0, done: false };
        } else {
          const temp = currentNum;
          currentNum += previousNum;
          previousNum = temp;

          return { value: temp, done: false };
        }
      },
    };
  },
};

console.log('The Fibonacci Series is:');

const fibSequence = fibonacci[Symbol.iterator]();
let i = 0;
while (i < 10) {
  console.log(fibSequence.next().value);
  i++;
}
