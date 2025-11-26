"use strict";

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw "Insufficient balance";
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

console.log(acc.deposit(5000));

try {
  console.log(acc.withdraw(7000));
} catch (err) {
  console.log("Error:", err);
}

console.log(acc.getBalance());
