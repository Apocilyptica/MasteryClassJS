const object = {
  a: {
    a: 1,
    b: 2,
    c: 3,
  },
  b: 2,
  c: 3,
};

const removeObj = (obj, key1, key2) => {
  if (key2) {
    delete obj[key1][key2];
  } else {
    delete obj[key1];
  }

  return obj;
};

console.log(removeObj(object, "b"));
