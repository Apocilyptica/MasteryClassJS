const toArray = (object) => {
  return Object.entries(object);
};

console.log(toArray({ a: 1, b: 2 }));

// fromEntries from array to object
const toObject = (array) => {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    key = element[0];
    value = element[1];
    object[key] = value;
  }
  return object;
};

console.log(toObject(toArray({ a: 1, b: 2 })));
