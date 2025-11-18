"use strict";

// Original Output:
// outer(): console.log(count) → undefined (hoisted var)
// inner(): console.log(count) → undefined (inner var shadowing outer)

// EXPLANATION in comments below.

function outer() {
  console.log(count); // undefined (outer var hoisted)
  var count = 5;

  function inner() {
    console.log(count); // undefined (inner var hoisted above assignment)
    var count = 10;
  }

  inner();
}

outer();

// Arrow version (does NOT hoist)
const outerArrow = () => {
  let count = 5;
  const innerArrow = () => console.log(count);
  innerArrow();
};

outerArrow();
