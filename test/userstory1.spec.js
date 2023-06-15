const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let expected, actual, result;

const plane1 = { id: `EI-HGL` };
const plane2 = { id: `G-IPLY` };

console.log(`User Story 1`);

// Test 1 - Check that Land plane in an empty airport using landPlanes and expect array (landedPlanes) to increase in length by 1.

console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`Land plane in airport using landPlane and expect array (landedPlanes) has increased by 1`);

// Arrange
expected = 1;

// Act
// airport.airportCapacity;
airport.landPlanes(plane1);
actual = airport.landedPlanes.length;


// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: 1 plane landed in airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;

console.log(`===================================================`);
console.log(``);

// Test 2 - Test that planes passed to landPlanes have actually been landed in the airport.

console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`Test that planes passed to landPlanes have actually been landed in the airport.`);

// Arrange
// Act
airport.landPlanes(plane1);
actual = airport.landedPlanes[0];


// Assert
result = assertEquals(actual, plane1);

// Report
console.log(`Test 2: Plane landed in airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;

console.log(`===================================================`);
console.log(``);

// Test 3 -	Test that planes can land when there are already planes in the landedPlanes Array.

console.log(`Test 3`);
console.log(`============================================`);
console.log(``);

console.log(`Test that planes can land when there are already planes in the landedPlanes Array.`);

// Arrange
airport.landedPlanes = [plane1];
expected = [plane1, plane2];
// Act
airport.landPlanes(plane2);
actual = airport.landedPlanes;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected)

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: Second plane landed in airport: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;

console.log(`===================================================`);
console.log(``);