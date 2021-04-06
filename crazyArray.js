let crazyArray = [
  "Elon Musk",
  "Bootcamp",
  3,
  5,
  { a: 2, b: 8 },
  "#",
  { language: "Japanese", greeting: "#" },
  767,
  34,
  "#",
  ["Tomato", "#", "PineApple"],
  { sports: "#" },
];

// hash in array => 'HASH'
// hasn in nested array => 'BOOM'
// hash in object => 'YEAH'

for (let i = 0; i < crazyArray.length; i++) {
  const element = crazyArray[i];
  if (element == "#") {
    crazyArray[i] = "HASH";
  }

  if (element.length) {
    for (let j = 0; j < element.length; j++) {
      const nestedElement = element[j];
      if (nestedElement == "#") {
        crazyArray[i][j] = "BOOM";
      }
    }
  }

  if (typeof element === "object" && !element.length) {
    const objectArray = Object.entries(element);
    let object = {};
    for (let j = 0; j < objectArray.length; j++) {
      const array = objectArray[j];
      let key = array[0];
      let value = array[1];
      if (value === "#") {
        value = "YEAH";
      }
      object[key] = value;
    }
    crazyArray[i] = object;
  }
}

console.log(crazyArray);
