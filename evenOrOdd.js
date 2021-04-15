const evenOdd = (n) => {
  if (n === 1) {
    return "Odd";
  } else if (n === 0) {
    return "Even";
  }
  return evenOdd(n - 2);
};

console.log(evenOdd(186));
