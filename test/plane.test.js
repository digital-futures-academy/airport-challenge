// Initial setup
const assertEquals = require(`../test-framework`);
const Plane = require(`../src/Plane`);

let plane;
let expected, actual, result;

// Plane Test 1 - Planes are created with an id
console.log(`=== Plane Test 1 - Planes are created with an id ===`)

// Arrange
expected = 1;

// Act
plane = new Plane(1);
actual = plane.id;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Plane Test 1 - Planes are created with an id: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)

// Clean up
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;