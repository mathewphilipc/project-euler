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

// Find the x-th prime number

var x = 10001;

var currentPrime = 2;
var primesSoFar = 1;
var n = 2;
while (primesSoFar < x) {
  n++;
  if (isPrime(n)) {
    currentPrime = n;
    primesSoFar++;
  }
}
console.log("Prime number " + primesSoFar + " is " + currentPrime + ".");

