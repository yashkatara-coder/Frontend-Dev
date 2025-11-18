"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", "  ", "100px", "3.14", null, undefined];

// Arrays to store results
const validNumbers = [];
const invalidNumbers = [];

// Loop through each value
for (let value of apiData) {
  const num = Number(value);
  const bool = Boolean(value);
  const str = String(value);

  console.log(`\nValue:`, value);
  console.log(`Number:`, num);
  console.log(`Boolean:`, bool);
  console.log(`String:`, str);

  // Skip invalid numbers
  if (Number.isNaN(num)) {
    invalidNumbers.push(value);
    console.log("❌ Invalid Number Found:", value);
  } else {
    validNumbers.push(num);
  }
}

console.log("\n📌 VALID Numbers:", validNumbers);
console.log("📌 INVALID Numbers:", invalidNumbers);
