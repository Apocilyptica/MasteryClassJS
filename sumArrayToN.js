const sumToN = (n) => {
  if (n == 0) {
    return 0;
  }
  return n + sumToN(--n);
};

const value = 10;

console.log(sumToN(value));

// const sumToNFor = (n) => {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };

// console.log(sumToNFor(value));
