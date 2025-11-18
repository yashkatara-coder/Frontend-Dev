"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];

rawData.forEach((line, index) => {
  try {
    const parsed = JSON.parse(line);

    if (!parsed.user || !parsed.age) {
      throw new Error("Missing required fields");
    }

    parsed.age = Number(parsed.age);

    if (parsed.age < 18) {
      throw new Error("Underage user");
    }

    clean.push(parsed);

  } catch (err) {
    console.log(`Line ${index + 1} Error →`, err.message);
  }
});

console.log("\nCLEAN JSON:", clean);
