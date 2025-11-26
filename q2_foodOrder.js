"use strict";

const menu = {
  pizza: 200,
  burger: 120,
  fries: 80,
  coke: 40
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw item;
      return menu[item];
    });

    const total = prices.reduce((t, p) => t + p, 0);
    console.log("Total Bill:", total);
  } catch (err) {
    console.log("Invalid item:", err);
  }
}

calculateBill(["pizza", "fries"]);
calculateBill(["burger", "chicken"]);
