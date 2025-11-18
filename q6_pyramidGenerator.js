"use strict";

let rows = 5; // user input default

for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// If replaced let → var, loop variable leaks outside block (hoisting effect)
