let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [5, 6, 7, 8, 9, 10];

const uniqueValues = (arr1, arr2) => {
  let uniqueArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (!arr2.includes(element)) {
      uniqueArr.push(element);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (!arr1.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
};

// console.log(uniqueValues(array1, array2));

let difference = array1.filter((x) => !array2.includes(x)).concat(array2.filter((x) => !array1.includes(x)));

// console.log(difference);

const uniqueValuesRec = (arr1, arr2) => {
  if (arr2.length === 0) {
    return arr1;
  }

  if (arr1.includes(arr2[0])) {
    let value = arr2.splice(0, 1)[0];
    let pos = arr1.indexOf(value);
    arr1.splice(pos, 1);
  } else {
    arr1.push(arr2.splice(0, 1)[0]);
  }

  return uniqueValuesRec(arr1, arr2);
};

console.log(uniqueValuesRec(array1, array2));
