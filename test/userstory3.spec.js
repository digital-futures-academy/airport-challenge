const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected;

const plane1 = { id: `EI-HGL` };
const plane2 = { id: `G-IPLY` };

console.log(`User Story 3`);

// Test 1 - Test that isAirportFull() returns Boolean.
console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`Test that isAirportFull() returns Boolean.`);

// Arrange
expected = false;

// Act
actual = airport.isAirportFull()

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: Does isAirportFull() return Boolean: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``)
// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;


// Test 2 - Test that when isAirportFull() returns “True”, planes cannot be landed.
console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`Test that when isAirportFull() returns “True”, planes cannot be landed.`);

// Arrange
expected = 0;

// Act
airport.isAirportFull()
airport.landPlanes(plane1)
actual = airport.landedPlanes.length;


// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: when isAirportFull() planes cannot be landed: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(actual)
console.log(airport.isAirportFull())
// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;
