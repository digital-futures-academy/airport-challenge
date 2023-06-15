// Test 1: Checking that the airport can land a plane using landPlane 

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(`Test 1 - Expecting one plane to be added to landedPlane, using landPlane`);
console.log(`========================================================================`);

// Arrange
expected = 1;
airport.landedPlanes = [];
const plane1 = { id: "plane1" };

// Act
airport.landPlane(plane1);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up 
airport.landedPlanes = [];
actual = undefined;
result = undefined;
