let matrix = [
  [1, 2, "#"],
  ["#", 16, 32],
  [64, "#", 256],
  [512, 1024, "#"],
  [4096, "#", 16384],
];

// Replace # with 2^x using for loop
var trueIndex = 0;

for (i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix[i].length; j++) {
    var value = 2 ** trueIndex;
    if (isNaN(matrix[i][j])) {
      matrix[i][j] = value;
      console.log(`Value changed to ${value} at the trueIndex of ${trueIndex}`);
    }
    {
      /*
    if (matrix[i][j] != value) {
      matrix[i][j] = value;
      console.log(`Value changed to ${value} at the trueIndex of ${trueIndex}`);
    }
  */
    }
    trueIndex++;
  }
}

console.log(matrix);
