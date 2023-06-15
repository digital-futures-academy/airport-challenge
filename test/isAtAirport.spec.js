// Test 5a: Checking that planes at airport can't land 

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 5a - Expecting landedPlanes to remain of the same length when using landPlane() with plane already at airport`);
console.log(`==================================================================================================================`);

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


// ================================================================
// Test 5b: Checking that planes not in the airport cannot take off
console.log(``);
console.log(`Test 5b - Expecting landedPlanes to remain of the same length when using planeTakeOff() with plane not at airport`);
console.log(`=================================================================================================================`);

// Act
airport.planeTakeOff("plane3");
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
actual = undefined;
result = undefined;
expected = undefined;

// =======================================================================
// Test 8: Checking that planes that have landed are within airport object

console.log(``);
console.log(`Test 7 - Expecting true value to be returned, as planes that have landed are stored in landedPlanes array`);
console.log(`=========================================================================================================`);

// Arrange
const plane1 = 'plane1';
const plane2 = 'plane2';
airport.landedPlanes = [plane1];
expected = true;

// Act
airport.landPlane(plane2);
actual = airport.isAtAirport(plane2);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
result = undefined;
actual = undefined;
expected = undefined;
