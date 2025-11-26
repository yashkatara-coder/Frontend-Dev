"use strict";

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  calculateFare() {
    if (!this.distance || this.distance < 0) throw "Invalid distance";
    return this.distance * 12;
  }
}

try {
  const d = new Driver("Rohit", 4.9, "Swift");
  const t = new Trip("A", "B", 10);
  console.log(t.calculateFare());
} catch (err) {
  console.log("Error:", err);
}
