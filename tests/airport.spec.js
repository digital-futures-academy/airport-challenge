const assertEquals  = require(`../testing_framework.js`);
const Airport = require ("../src/airport.js")
const Plane = require ("../src/plane.js")

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Instruct airport to land *something*
console.log(`============================`);
console.log(`Test 1 - Instruct airport to land *something*`);

// Arrange
airport = new Airport();
expected = "You are free to land, I repeat, you are free to land. Over.";

// Act

actual = airport.landPlane()

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Something instructed to land: ${result}`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Instruct airport to land a plane and only a plane
console.log(`============================`);
console.log(`Test 2 - Instruct airport to land a plane`);

// Arrange
airport = new Airport();
plane = new Plane(`3456`)
expected = `${plane.id}, you are free to land, I repeat, you are free to land. Over.`

// Act

actual = airport.landPlane(plane)

// Assert
result = assertEquals(expected, actual);

console.log(`Test 2: Only a plane can be instructed to land: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;