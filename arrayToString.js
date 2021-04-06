let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using for loop
var string = "";
for (i = 0; i < numbers.length; i++) {
  string += numbers[i];
}

console.log(`String using for loop: ${string}`);

// Using while loop

var string = "";
var i = 0;

while (i < numbers.length) {
  string += numbers[i];
  i++;
}

console.log(`String using while loop: ${string}`);

// Using toString() Method

var string = numbers.toString().replace(/,/g, "");

console.log(`String using toSting() Method: ${string}`);
