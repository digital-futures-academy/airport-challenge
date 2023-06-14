const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected;

// let airportCapacity = 10
// Test 1 - Check that airportCapacity returns a default airport capacity.

console.log(`Test 1`);
console.log(`============================================`);
console.log(``);

console.log(`Check that airportCapacity returns a default airport capacity.`);

// Arrange
expected = 10

// Act
actual = airport.defaultAirportCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: Is there a default airport capacity: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean up
result = undefined;
expected = undefined;
actual = undefined;

console.log(`===================================================`);
console.log(``);

// Test 2 - Check that using modifyAirportCapacity modifies default airport capacity.

console.log(`Test 2`);
console.log(`============================================`);
console.log(``);

console.log(`Check that using modifyAirportCapacity modifies default airport capacity.`);
const airportCapacity1 = 20;
// Arrange
expected = 30;

// // Act
actual = airport.modifyAirportCapacity(airportCapacity1);


// // Assert
result = assertEquals(actual, expected);

// // Report
console.log(`Test 2: Has airport capacity been modified: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean up

result = undefined;
expected = undefined;
actual = undefined;

console.log(`===================================================`);
console.log(``);
