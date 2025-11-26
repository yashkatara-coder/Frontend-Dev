"use strict";

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `${this.movieName} | Seat ${this.seatNo} | ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, fee) {
    super(movieName, seatNo, price);
    this.fee = fee;
  }

  getTotalAmount() {
    return this.price + this.fee;
  }
}

const t = new OnlineTicket("KGF 3", "A10", 200, 20);
console.log(t.printTicket());
console.log(t.getTotalAmount());
