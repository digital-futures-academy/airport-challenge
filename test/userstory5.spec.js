const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let expected, actual, result;

const plane1 = { id: `EI-HGL` };
const plane2 = { id: `G-IPLY` };

console.log(`User Story 5`);

// Test 1 - Test that when a plane is not at landedPlanes array, removePlanes() returns an error stating that the plane is not at the airport.

console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`removePlanes() returns error when a plane is no longer at the airport.`);

// Arrange
expected = "This plane is not at the airport.";

// Act
airport.planesExist()
actual = airport.removePlanes();



// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: when planes are no longer at airport, planes cannot be removed: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``)
console.log(actual);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;


console.log(`===================================================`);
console.log(``);

// Test 2 - Test that when a plane is at landedPlanes array, landPlanes() returns an error stating that the plane is not at the airport.

console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`landPlanes() returns error when a plane is no longer at the airport.`);

// Arrange
expected = "This plane is already at the airport.";
airport.landedPlanes = [plane1]
// Act
airport.planesExist(plane1)
actual = airport.landPlanes();



// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test2: when a plane is already at the airport, plane cannot be landed: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``)
console.log(actual);

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;


console.log(`===================================================`);
console.log(``);
