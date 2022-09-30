const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;
let plane;
let weather;

console.log(`----------------------`);
console.log(`Test 1 - Plane1 take off when weather is stormy => False`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane1';
weather = 'stormy';
expected = false;

// Actual
actual = airport.takeOff(weather, plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane1 take off when weather is stormy => False is ${result}`);

//Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;
weather = undefined;

console.log(`----------------------`);
console.log(`Test 2 - Plane1 take off when weather is sunny => True`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane1';
weather = 'sunny';
expected = true;

// Actual
actual = airport.takeOff(weather, plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Plane1 take off when weather is sunny => True is ${result}`);

//Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;
weather = undefined;