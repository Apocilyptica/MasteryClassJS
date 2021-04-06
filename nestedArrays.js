let twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let oneDArray = [];

for (let i = 0; i < twoDArray.length; i++) {
  for (let j = 0; j < twoDArray[i].length; j++) {
    oneDArray.push(twoDArray[i][j]);
  }
}

// console.log(oneDArray);

let array = [1, 2, 3, 4, 5, 6, 7];
let ln = array.length - 1;

for (i = 0; i < ln - i; i++) {
  temp = array[i];
  array[i] = array[ln - i];
  array[ln - i] = temp;
}

// console.log(array);

let array1 = ["pasta", "salad", "noodle soup"];
let array2 = ["dumplings", "sushi", "steak"];
let newArray = [];

for (i = 0; i < array1.length + array2.length; i++) {
  if (i < array1.length) {
    newArray.push(array1[i]);
  } else {
    newArray.push(array2[i - array1.length]);
  }
}

console.log(newArray);
// console.log(mergeArray);
