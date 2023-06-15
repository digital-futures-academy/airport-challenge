// Test 8: Checking that planes that have landed are within airport object

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 7 - Expecting true value to be returned`);
console.log(`============================================`);

// Arrange
const plane1 = 'plane1';
const plane2 = 'plane2';
airport.landedPlanes = [plane1, plane2];
expected = true;

// Act
actual = airport.isAtAirport(plane1);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
result = undefined;
actual = undefined;
