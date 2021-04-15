const array = [25, 100, 853, 2, 1, 56, 871, 257, 132];

const sortArray = (arr, direction) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if ((arr[i] > arr[j] && direction == "desc") || (arr[i] < arr[j] && direction == "asc")) {
        const numToMove = arr.splice(i, 1)[0];
        arr.splice(j, 0, numToMove);

        // console.log(arr);
      }
    }
  }
  return arr;
};

console.log(sortArray(array, "asc"));
