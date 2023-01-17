// Initial setup
const assertEquals = require(`../test-framework`);
const Plane = require(`../src/Plane`);

let plane;
let expected, actual, result;
let specs = 0;
let failed = 0;

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
if (result) { specs += 1 }
else { failed += 1 }

// Clean up
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Plane Test 2 - If a Plane isn't supplied with an id upon creation, it should have a placeholder id of -1
console.log(`=== Plane Test 2 - If a Plane isn't supplied with an id upon creation, it should have a placeholder id of -1 ===`)

// Arrange
expected = -1;

// Act
plane = new Plane();
actual = plane.id;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Plane Test 2 - If a Plane isn't supplied with an id upon creation, it should have a placeholder id of -1: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)
if (result) { specs += 1 }
else { failed += 1 }

// Clean up
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`Specs: ${specs} || Failed: ${failed}`)
console.log(`===================================== PLANE TESTS END =====================================\n\n`);