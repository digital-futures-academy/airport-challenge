// Initial setup
const assertEquals = require(`../test-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let airport, plane, expected, actual, result;

// remember:  Arrange, Act, Assert, Clean up

// Test 1 - when a Plane is landed, planeList should increase by 1
console.log(`=== Test 1 - when a Plane is landed, planeList should increase by 1 ===`)

// Arrange
airport = new Airport();
plane = new Plane();
expected = airport.planeList.length + 1;

// Act
airport.landPlane(plane);
actual = airport.planeList.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Test 1 - when a Plane is landed, planeList should increase by 1: ${result ? `Passed` : `Failed`}`);

// Clean up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;