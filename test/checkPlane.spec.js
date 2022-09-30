const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;
let plane;

console.log(`----------------------`);
console.log(`Test 1 - Plane3 take off from Airport['plane1', 'plane2'] => false`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane3';
expected = false;

// Act
actual = airport.checkTakeOff(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane3 take off from Airport['plane1', 'plane2'] => false is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

console.log(`----------------------`);
console.log(`Test 2 - Plane1 take off from Airport['plane1', 'plane2'] => true`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane1';
expected = true;

// Act
actual = airport.checkTakeOff(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Plane1 take off from Airport['plane1', 'plane2'] => true is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

console.log(`----------------------`);
console.log(`Test 3 - Plane1 land to Airport['plane1', 'plane2'] => false`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane1';
expected = false;

// Act
actual = airport.checkLand(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3 - Plane1 land to Airport['plane1', 'plane2'] => false is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

console.log(`----------------------`);
console.log(`Test 4 - Plane3 land to Airport['plane1', 'plane2'] => true`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
plane = 'plane3';
expected = true;

// Act
actual = airport.checkLand(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4 - Plane3 land to Airport['plane1', 'plane2'] => true is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;