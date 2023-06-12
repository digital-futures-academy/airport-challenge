const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let input = [];
let expected, actual, result;

const plane1 = {}

// Test 1 - Can planes be landed (added) to the airport

console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`Land plane in airport using landPlane and expect array (landedPlanes) has increased by 1`);

// Arrange
expected = 1;

// Act
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