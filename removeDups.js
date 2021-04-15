let array = [33, 21, 14, 3, 21, 21, 334, 579, 34, 565, 4345, 3987, 3];

const removeDups = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const elementI = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const elementJ = arr[j];

      if (elementI == elementJ && j != i) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
};

console.log(removeDups(array));
