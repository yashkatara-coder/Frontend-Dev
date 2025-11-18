"use strict";

// Original code fails because 'status' is in TDZ and 'score' logs undefined.

// FIXED VERSION
let score = 50;
let status = "ready";

function announce() {
  console.log("Game started");
}

function startGame() {
  console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function rewrite (not hoisted)
const announce2 = () => console.log("Game started");
const startGame2 = () => console.log(status);

// announce2();  // works only after declaration
