const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let expected, actual, result;

const plane1 = { id: `EI-HGL` };
const plane2 = { id: `G-IPLY` };

console.log(`User Story 4`);

// Test 1 - 1)	Check that taking-off plane from an airport using removePlanes and expect array (landedPlanes) to decrease in length by 1.
console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`Take-off plane using removePlane and expect array (landedPlane) has decreased by 1. `);

// Arrange
expected = 0;
airport.landedPlanes = [plane1];

// Act
airport.removePlanes(0);
actual = airport.landedPlanes.length;


// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: 1 plane took off from airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);


// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;

// Test 2 - Test that only the desired plane was removed from the landedPlanes array.
console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`Test that only the desired plane was removed from the landedPlanes array. `);

// Arrange
expected = [plane2];
airport.landedPlanes = [plane1, plane2]

// Act
airport.removePlanes(0);
actual = airport.landedPlanes;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test2: only desired plane took off from airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;

// Test 3 - Test that planesExist returns an error message when a plane has been removed from the landedPlanes array.

console.log(`============================================`);
console.log(``);

console.log(`Test that planesExist returns an error message when a plane has been removed from the landedPlanes array. `);

// Arrange
expected = "This plane is not at the airport. Therefore it can not take-off.";
airport.landedPlanes = [plane1, plane2]
// Act
airport.removePlanes(0)
actual = airport.planesExist(plane1);;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test3: Has an error message shown after plane was removed: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;
