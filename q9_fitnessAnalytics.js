"use strict";

const data = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(records) {
    if (records.length === 0) throw "Dataset is empty";
    this.records = records;
  }

  getActiveUsers() {
    return this.records.filter(r => r.steps > 7000);
  }

  getAverageCalories() {
    return this.records.reduce((t, r) => t + r.calories, 0) / this.records.length;
  }

  getUserSummary() {
    return this.records.map(r => `${r.user} burned ${r.calories} calories`);
  }
}

const f = new FitnessAnalytics(data);
console.log(f.getActiveUsers());
console.log(f.getAverageCalories());
console.log(f.getUserSummary());
