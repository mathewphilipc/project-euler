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
  if (inputNum < 0) {
    return -1;
  } else if (inputNum < 10) {
    return 1;
  } else if (inputNum < 100) {
    return 2;
  } else if (inputNum < 1000) {
    return 3;
  } else if (inputNum < 10000) {
    return 4;
  } else if (inputNum < 100000) {
    return 5;
  } else if (inputNum < 1000000) {
    return 6;
  } else if (inputNum < 10000000) {
    return 7;
  } else {
    return -1;
  }
}

var numToArray = function(inputNum) {
  var len = numDigits;
  if (len===-1) {
    return "stop that right now";
  }
}

var cycle = function(inputNum) {
  var len = numDigits(inputNum);
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

console.log(numDigits(9999));
