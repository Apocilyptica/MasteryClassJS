let nums = [1, 8, 52, 76, 1, 45, 29, 67, 35, 82, 14, 15, 4, 2, 9];

const mergeSplit = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);

  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return mergeArray(mergeSplit(left), mergeSplit(right));
};

const mergeArray = (left, right) => {
  let mergedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }

  return mergedArray.concat(...left).concat(...right);
};

console.log(mergeSplit(nums));
