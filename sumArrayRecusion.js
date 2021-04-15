let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // =55

const sumValues = (arr, i = 0) => {
  if (i == arr.length) {
    return 0;
  }
  const value = arr[i];
  return sumValues(arr, ++i) + value;
};

console.log(sumValues(array));
