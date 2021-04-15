const getFactorial = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};

console.log(getFactorial(9));
