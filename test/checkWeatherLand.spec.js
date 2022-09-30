const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;
let plane;
let weather;

console.log(`----------------------`);
console.log(`Test 1 - Plane3 land when weather is stormy => False`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane3';
weather = 'stormy';
expected = false;

// Actual
actual = airport.land(weather, plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane3 land when weather is stormy => False is ${result}`);

//Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;
weather = undefined;

console.log(`----------------------`);
console.log(`Test 2 - Plane3 land when weather is sunny => True`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane3';
weather = 'sunny';
expected = true;

// Actual
actual = airport.land(weather, plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Plane3 land when weather is sunny => True is ${result}`);

//Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;
weather = undefined;