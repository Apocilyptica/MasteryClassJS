const object1 = {
  a: 1,
  b: 1,
};

const object2 = {
  a: 1,
  b: 1,
};

const object3 = {
  a: 1,
  b: 2,
};

const object4 = {
  a: 1,
  b: 1,
  c: 1,
};

const object5 = {
  b: 1,
  c: 1,
};

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1).length;
  const keys2 = Object.keys(obj2).length;

  if (keys1 !== keys2) {
    return false + ` Objects do not have the same length`;
  }
  for (const key in obj1) {
    const element1 = obj1[key];
    const element2 = obj2[key];

    if (!obj1[key] || !obj2[key]) {
      return false + ` one of the objects does not have a property key of ${key}`;
    }

    if (element1 !== element2) {
      return false + ` ${key}:${element1} in object1 does not match ${key}:${element2} in object2`;
    }
  }
  return true + ` all elements match`;
};

console.log(compare(object1, object2));
console.log(compare(object1, object3));
console.log(compare(object1, object4));
console.log(compare(object1, object5));
