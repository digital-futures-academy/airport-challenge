// Test 2a: Checking that the airport default capacity (10) is overridden when using overrideCapacity, it is expected to have increased to 12

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 2a - airportCapacity should have increased to 12 using overrideCapacity()`);
console.log(`==============================================================================`);

// Arrange
airport.airportCapacity = 10;
expected = 12;

// Act
airport.overrideCapacity(12);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
actual = undefined;
result = undefined;
airport.airportCapacity = 10;
expected = undefined;


// =======================================================================================
// Test 2b: Checking that a string input when using overrideCapacity won't change anything

console.log(``);
console.log(`Test 2b - airportCapacity should have remained 10 when inserting a string with overrideCapacity()`);
console.log(`=================================================================================================`);

// Arrange
airport.airportCapacity = 10;
expected = 10;

// Act
airport.overrideCapacity('twelve');
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`${result ? `PASS` : `FAIL`}`);

// Clean up
actual = undefined;
result = undefined;
airport.airportCapacity = 10;
