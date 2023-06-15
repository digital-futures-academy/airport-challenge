// Test 6: Checking that isStormy is functional
const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 6a - Expecting isStormy to return a boolean value`);
console.log(`======================================================`);

// Arrange
expected = true || false;

// Act
airport.weather = Math.floor(Math.random() * 10);
actual = airport.isStormy();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
actual = undefined;
result = undefined;


// Test 6b: Checking that planes cannot take off when isStormy()
console.log(``);
console.log(`Test 6b - Expecting landedPlanes to remain of same length when isStormy`);
console.log(`=======================================================================`);

// Arrange
airport.landedPlanes = ['plane1', 'plane2'];
expected = 2;

//Act
airport.planeTakeOff("plane1");
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
actual = undefined;
result = undefined;


// Test 6c: Checking that planes cannot land when isStormy()
console.log(``);
console.log(`Test 6c - Expecting landedPlanes to remain of same length when isStormy`);
console.log(`=======================================================================`);

// Arrange
airport.landedPlanes = [];
expected = 0;
plane = "plane1";

// Act
airport.landPlane(plane);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
actual = undefined;
result = undefined;