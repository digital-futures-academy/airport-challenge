// Test 5a: Checking that planes at airport can't land 

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 5a - Checking that planes in the airport cannot land`);
console.log(`=========================================================`);

// Arrange
expected = 2;
airport.landedPlanes = ["plane1", "plane2"];

// Act
airport.landPlane("plane1");
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);


// Clean up
expected = 2;
airport.landedPlanes = ["plane1", "plane2"];
result = undefined;
actual = undefined;

// Test 5b: Checking that planes not in the airport cannot take off
console.log(``);
console.log(`Test 5b - Checking that planes not in the airport cannot take off`);
console.log(`=================================================================`);

// Act
airport.planeTakeOff("plane3");
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);