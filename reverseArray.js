let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reverseArray = [];

// Reverse Array Using For Loop
for (i = numbers.length - 1; i >= 0; i--) {
  reverseArray.push(numbers[i]);
}

console.log(`Reverse Array using for loop: ${reverseArray}`);

// Reverse Array Using While Loop
var reverseArray = [];
i = numbers.length - 1;

while (i >= 0) {
  reverseArray.push(numbers[i]);
  i--;
}

console.log(`Reverse Array using while loop: ${reverseArray}`);

// Reverse Array Using reverse()
var reverseArray = numbers.reverse();

console.log(`Reverse Array using reverse(): ${reverseArray}`);

// Reverse Array Using recursion
function reverseArrayRecursion(arr) {
  if (arr.length === 0) {
    return [];
  }
  return [arr.pop()].concat(reverseArrayRecursion(arr));
}

console.log(`Reverse Array using recursion: ${reverseArrayRecursion(Array(numbers))}`);
