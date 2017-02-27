var isTriple = function(a,b,c) {
  return (a*a + b*b === c*c || a*a === b*b + c*c || b*b === a*a + c*c);
}

// We want the unique triple satisfying a+b+c=1000 and a<b<c, in particular the value a*b*c
// First solve for c = 1000 - a - b
// Iterate only over a < b
// Note that c>0 implies a < 1000 and b < 1000 - a

var a, b, c;
for (a = 1; a < 1000; a++) {
  for (b = a+1; b < 1000 - a && 1000 - a - b > b; b++) {
    c = 1000 - a - b;
    if (isTriple(a,b,c)) {
      console.log("Found it! a*b*c = " + a + "*" + b + "*" + c + " = " + a*b*c);
    }
  }
}
