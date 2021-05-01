var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

const objectArraySort = (objArray, sortBy, i = 0, j = objArray.length) => {
  if (j === 0) {
    return objArray;
  }

  if (sortBy != "title" && sortBy != "author" && sortBy != "libraryID") {
    return `${sortBy} is not a valid sort key! Please enter a valid sort key.`;
  }

  if (i === j - 1) {
    return objectArraySort(objArray, sortBy, 0, --j);
  }

  if (sortBy == "title" || sortBy == "author") {
    let codePos = 0;

    // if letters match at postion increment position till they dont match
    while (objArray[i][sortBy].charCodeAt(codePos) == objArray[i + 1][sortBy].charCodeAt(codePos)) {
      ++codePos;
    }

    const objLetter1 = objArray[i][sortBy].charCodeAt(codePos);
    const objLetter2 = objArray[i + 1][sortBy].charCodeAt(codePos);

    const tempObj1 = objArray[i];
    const tempObj2 = objArray[i + 1];

    if (objLetter1 > objLetter2) {
      objArray[i] = tempObj2;
      objArray[i + 1] = tempObj1;
    }
  }

  if (sortBy == "libraryID") {
    const tempObj1 = objArray[i];
    const tempObj2 = objArray[i + 1];

    if (objArray[i][sortBy] > objArray[i + 1][sortBy]) {
      objArray[i] = tempObj2;
      objArray[i + 1] = tempObj1;
    }
  }

  return objectArraySort(objArray, sortBy, ++i, j);
};

console.log(objectArraySort(library, "title"));
console.log(objectArraySort(library, "author"));
console.log(objectArraySort(library, "libraryID"));
console.log(objectArraySort(library, "key"));
