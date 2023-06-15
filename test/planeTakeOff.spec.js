//Test 4: Checking that a plane can take off from the airport, using planeTakeOff

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``)
console.log(`Test 4 - Expecting landedPlanes to have reduced by one, when using planeTakeOff`);
console.log(`===============================================================================`);

// Arrange
expected = 1;
airport.landedPlanes = ["plane1", "plane2"];

// Act
airport.planeTakeOff("plane2");
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
airport.landedPlanes = ["plane1", "plane2"];
actual = undefined;
result = undefined;