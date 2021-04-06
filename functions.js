const getDish = (dish, country) => {
  return `This ${dish} is a dish from ${country}`;
};

const dish1 = getDish("Spaghetti", "BackendCode");
const dish2 = getDish("Ramen Noodles", "Prison");
const dish3 = getDish("Chocolate", "My Wifes Stash");

// console.log(dish1);
// console.log(dish2);
// console.log(dish3);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// example: (3 * 2) + 3
// res1:    (5 * 6) - 5 + (8 * 5)
// res2:    ((2 - 3) * (4 * 5)) - 10 + (8 * 3)
// res3:    (6 + 8) - (5 + 5) * (8 - 5)
// ***********************************

let example = add(multiply(3, 2), 3);

let res1 = add(subtract(multiply(5, 6), 5), multiply(8, 5));

let res2 = add(subtract(multiply(subtract(2, 3), multiply(4, 5)), 10), multiply(8, 3));

let res3 = subtract(add(6, 8), multiply(add(5, 5), subtract(8, 5)));

// ***********************************
console.log(res1);
console.log(5 * 6 - 5 + 8 * 5);

console.log(res2);
console.log((2 - 3) * (4 * 5) - 10 + 8 * 3);

console.log(res3);
console.log(6 + 8 - (5 + 5) * (8 - 5));

// console.log(res1)
// console.log((5 * 6) - 5 + (8 * 5))

// console.log(res2)
// console.log((2 - 3) * (4 * 5)) - 10 + (8 * 3);

// console.log(res3)
// console.log((6 + 8) - (5 + 5) * (8 - 5))
