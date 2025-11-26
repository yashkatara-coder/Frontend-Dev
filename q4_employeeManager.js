"use strict";

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department}`;
  }
}

const e = new Employee("Yash", "IT");
const m = new Manager("Rahul", "HR");

console.log(e.work());
console.log(m.work());
