let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

// top solution using a for loop bottom solution using recusion

const absoluteDiff = (arr) => {
  let diff = 0;
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i][i] - arr[i][n - 1 - i];
  }
  return Math.abs(diff);
};

console.log(absoluteDiff(matrix));

// Recursion

const diagonalDiffRec = (arr, i = 0) => {
  if (i == arr.length) {
    return 0;
  }

  const value = arr[i][i] - arr[i][arr.length - 1 - i];

  return diagonalDiffRec(arr, ++i) + value;
};

const calcDiagonalDiff = () => {
  const total = diagonalDiffRec(matrix);
  return Math.abs(total);
};

console.log(calcDiagonalDiff());
