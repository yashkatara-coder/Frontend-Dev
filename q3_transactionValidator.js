"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let txn of transactions) {
  try {
    if (txn === null) throw new Error("Null transaction");

    if (!("id" in txn) || !("amount" in txn)) {
      throw new Error("Missing ID or Amount");
    }

    if (txn.amount < 0) {
      throw new Error("Negative Transaction");
    }

    valid.push(txn);
  } catch (err) {
    invalid.push({ txn, error: err.message });
  }
}

console.log("\nVALID Transactions:", valid);
console.log("\nINVALID Transactions:", invalid);
console.log(`\nSuccess Count: ${valid.length}`);
console.log(`Failed Count: ${invalid.length}`);
