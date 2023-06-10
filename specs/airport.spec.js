const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected, plane;

airport.destination = [];

console.log(`Test 1`);
console.log(``);

console.log(` Testing if airport was instructed to land the plane using airport.land(plane)`);

expected = true;
plane = {};

result = airport.land(plane);
actual = airport.destination.includes(plane);

result = assertEquals(actual, expected);

console.log(`Test1: plane landed: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);