const assertEquals  = require(`../testing_framework.js`);
const Airport = require ("../src/airport.js")

let expected;
let actual;
let result;
let airport;

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
