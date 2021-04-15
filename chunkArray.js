let array = [33, 45, 18, 52, 64, 215, 478, 74, 62, 37, 75, 61, 74];

const chunkArray = (arr, num, newArr = []) => {
  if (arr.length == 0) {
    return newArr;
  }

  newArr.push(arr.splice(0, num));

  return chunkArray(arr, num, newArr);
};

console.log(chunkArray(array, 2));
