function movingShift(s, shift) {
  tempArray = [];
  tempString = "";
  resultA = new Array(5);
  for (var i = 0; i < s.length; i++) {
    handle = false;
    var temp = s.charCodeAt(i);
    if (temp >= 97 && temp <= 122) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) + shift;
      if (tempArray[i] > 122) {
        tempArray[i] = tempArray[i] - 26;
      }
    }
    if (temp >= 65 && temp <= 90) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) + shift;
      if (tempArray[i] > 90) {
        tempArray[i] = tempArray[i] - 26;
      }
    }
    if (!handle) tempArray[i] = s.charCodeAt(i);
    shift++;
    if (shift == 27) shift = 1;
  }

  for (var i = 0; i < tempArray.length; i++) {
    tempArray[i] = String.fromCharCode(tempArray[i]);
  }
  tempString = tempArray.join("");

  var start = 0;
  var end = Math.ceil(tempString.length / 5);
  var i = 0;

  for (var i = 0; i < 5; i++) {
    resultA[i] = tempString.slice(start, end);
    start = end;
    end = end + Math.ceil(tempString.length / 5);
  }

  return resultA;
}

function demovingShift(arr, shift) {
  s = arr.join("");
  tempArray = [];
  resultB = new Array(5);
  for (var i = 0; i < s.length; i++) {
    handle = false;
    var temp = s.charCodeAt(i);
    if (temp >= 97 && temp <= 122) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) - shift;
      if (tempArray[i] < 97) {
        tempArray[i] = tempArray[i] + 26;
      }
    }
    if (temp >= 65 && temp <= 90) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) - shift;
      if (tempArray[i] < 65) {
        tempArray[i] = tempArray[i] + 26;
      }
    }
    if (!handle) tempArray[i] = s.charCodeAt(i);
    shift++;
    if (shift == 27) shift = 1;
  }

  for (var i = 0; i < tempArray.length; i++) {
    tempArray[i] = String.fromCharCode(tempArray[i]);
  }
  resultB = tempArray.join("");
  return resultB;
}

console.log(movingShift("I should have known that you would have a perfect answer for me!!!", 1));

console.log(demovingShift(["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"], 1));
