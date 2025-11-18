// Without strict mode = silent mistakes allowed
function demoNormal(a, a) {
  total = 10; // becomes global variable
}
demoNormal(5, 10);

// With strict mode
"use strict";
function demoStrict(a, b) {
  let total = 10;
  return total;
}

console.log("Strict mode forbids:")
console.log("- duplicate parameters")
console.log("- undeclared variables")
console.log("- deleting variables")
