var collatzLen = function(n) {
  var currentN = n;
  var len = 1;
  if (currentN === 1) {
    len = 1;
  } else {
    while (currentN != 1) {
      len++
      if (currentN%2===0) {
        currentN = currentN /2;
      } else {
        currentN = 3*currentN + 1;
      }
    }
  }
  return len;
}

// We want to find the longest Collatz chain of any number under 1,000,000

var strictUpper = 19;
var maxNum = 1;
var maxLength = 1;
var currLength;
for (var n = 1; n < strictUpper; n++) {
  currLength = collatzLen(n);
  if (currLength > maxLength) {
    maxLength = currLength;
    maxNum = n;
  }
}
console.log("The number under " + strictUpper + " with the longest Collatz chain is " + maxNum + ", with length " + maxLength);
