let nums = [1, 8, 52, 76, 1, 45, 29, 67, 35, 82, 14, 15, 4, 2, 9];

const bubbleSortRecursion = (array, i = 0, end = array.length - 1) => {
  if (end === 0) {
    return array;
  }

  if (i + 1 > end) {
    return bubbleSortRecursion(array, 0, --end);
  }

  const a = array[i];
  const b = array[i + 1];

  if (a > b) {
    array[i] = b;
    array[i + 1] = a;
  }

  return bubbleSortRecursion(array, ++i, end);
};

console.log(bubbleSortRecursion(nums));

const bubbleSortLoop = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const a = array[j];
      const b = array[j + 1];
      if (a > b) {
        array[j] = b;
        array[j + 1] = a;
      }
    }
  }
  return array;
};

console.log(bubbleSortLoop(nums));
