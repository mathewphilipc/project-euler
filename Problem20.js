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

var semiFactorial = function(inputNum) {
  var output = 1;
  for (var n = 1; n <= inputNum; n++) {
    output *= n;
    while (output%10 === 0) {
      output /= 10;
    }
  }
  return output;
}

var factorial = function(inputNum) {
  var output = 1;
  for (var n = 1; n <= inputNum; n++) {
    output *= n;
  }
  return output;
}

// Maps nonneg int to array of digits

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

// sums digits of nonneg int

var digitSum = function(inputNum) {
  var inputArray = numToArray(inputNum);
  var len = inputArray.length;
  var output = 0;
  for (var pos = 0; pos < len; pos++) {
    output += inputArray[pos];
  }
  return output;
}

var testNum = 30;
console.log("Let's start with a nice number: " + testNum + ".");
var reduced = semiFactorial(testNum);
console.log("This has factorial " + factorial(testNum) + " and reduced factorial " + reduced);
console.log("The corresponding array of digits for the reduced factorial is " + numToArray(reduced) + ".");
console.log("The corresponding digit sum is " + digitSum(reduced) + ".")















































