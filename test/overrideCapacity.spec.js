// Test 2: Checking that the airport default capacity (10) is overridden when using overrideCapacity, it is expected to have increased to 12

const { assertEquals } = require(`./testing-framework`);
const airport = require(`../src/airport`);

let actual, expected, result;

console.log(``);
console.log(`Test 2 - airportCapacity should have increased to 12`);
console.log(`====================================================`);

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
