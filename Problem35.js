var isPrime = function(inputNum) {
  if (inputNum===1) {
    return false;
  } else if (inputNum===2) {
    return true;
  } else {
    for (var f = 2; f*f <= inputNum; f++) {
      if (inputNum%f===0) {
        return false;
      }
    }
    return true;
  }
}

var numDigits = function(inputNum) {
  var maxDigits = 8;
  if (inputNum < 0) {
    return "too few";
  }
  if (0 <= inputNum && inputNum < 10) {
      return 1;
  } else {
    var output = 2;
    var lower = 10;
    while (output <= maxDigits) {
      if (lower <= inputNum && inputNum < 10*lower) {
        return output;
      }
      lower *= 10;
      output++;
    }
    return "too many";
  }
}

var numToArray = function(inputNum) {
  var len = numDigits;
  if (len===-1) {
    return "stop that right now";
  } else {
    var outputArray = [];
    var currNum = inputNum;
    var lastDigit;
    while (currNum > 0) {
      lastDigit = currNum%10;
      outputArray.unshift(lastDigit);
      currNum = (currNum - lastDigit)/10;
    }
    return outputArray;
  }
}

var arrayToNum = function(inputArray) {
  var currNum = 0;
  for (var n = 0; n < inputArray.length; n) {
    currNum = 10*currNum + inputArray[n];
  }
  return currNum;
}

var cycle = function(inputArray) {
  var len = inputArray.length;
  var temp = inputArray[0];
  
  if (len===-1) {
    return -1;
  }
  if (len===1) {
    return inputNum;
  }
  else {
    return inputNum;
  }
}

var testArray = numToArray(243);
console.log(testArray);
