var isPrime = function(inputNum) {
  if (inputNum===1) {
    returnf false;
  } else {
    for (var f = 2; f*f < inputNum; f++) {
      if (inputNum%f===0) {
        return false;
      }
    }
    return true;
  }
}

var x = 600851475143;
xReduced = x;
for (var possible = 2; xReduced != 1 && possible <= x; possible++) {
  while (xReduced%possible === 0) {
    if (isPrime(possible)) {
      biggest = possible;
      xReduced = xReduced / possible;
      console.log("Next found prime factor is " + possible + ", leaving " + xReduced);
    }
  }
}
console.log("Biggest prime factor of + " x + " is " + biggest + ".");
