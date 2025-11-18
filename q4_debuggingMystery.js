"use strict";

// Original Code threw error because `greeting` was undeclared (strict mode forbids it)

function showMessage() {
  let greeting = "Welcome"; // FIX: declared variable
  console.log(greeting);
}

showMessage();

// Explanation in comment:
// ❗ In strict mode, assigning to an undeclared variable creates a ReferenceError.
// Scope rules require explicit declaration.
