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
expected = true;

// Act
actual = airport.isAirportFull()

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: Does isAirportFull() return Boolean: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``)
// Clean up
result = undefined;
actual = undefined;


// Test 2 - Test that when isAirportFull() returns “False”, planes cannot be landed.
console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`Test that when isAirportFull() returns “False”, planes cannot be landed.`);

// Arrange
expected = [];

// Act
airport.modifyAirportCapacity(0);
airport.landPlanes(plane1);
actual = airport.landedPlanes;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);


// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: when isAirportFull() planes cannot be landed: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``)

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;
