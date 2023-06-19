const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let expected, actual, result;

const plane1 = { id: `EI-HGL` };
const plane2 = { id: `G-IPLY` };

console.log(`User Story 5`);

// Test 1 - planesExist() returns message stating that when planes are no longer at airport, planes cannot take off.

console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`planesExist() returns Message stating that when planes are no longer at airport, planes cannot take off.`);

// Arrange
expected = "This plane is not at the airport. Therefore it can not take-off.";

// Act

actual = airport.planesExist(plane1);
// airport.isPlaneAtAirport();



// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test1: Message stating that when planes are no longer at airport, planes cannot take off: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``)

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;


console.log(`===================================================`);
console.log(``);

// Test 2 - Test that when a plane is at landedPlanes array, planesExist() returns a message stating that the plane is already at the airport.

console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`planesExist() returns message when a plane is already at the airport.`);

// Arrange
expected = "This plane is already at airport, It can not be landed.";
airport.landedPlanes = [plane1]

// Act
actual = airport.planesExist(plane1);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test2: message stating that when a plane is already at the airport, plane cannot be landed: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``)

// Clean up
airport.landedPlanes = [];
result = undefined;
actual = undefined;


console.log(`===================================================`);
console.log(``);
