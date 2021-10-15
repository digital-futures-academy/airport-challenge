const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- SETTING AND OVERRIDING CAPACITY TESTS ---');

let expectedOutput, result;

// Test 1 - Test that default capacity initially provided is set correctly
console.log('Test 1 - Test that default capacity initially provided is set correctly')
// Arrange
let airport = new Airport(1000);
expectedOutput = 1000;
// Act
// Assert
result = assertEquals(airport.maxCapacity, expectedOutput);
console.log(result);

// Test 2 - Test that the default capacity given can be overridden 
console.log('Test 2 - Test that the default capacity given can be overridden');
// Arrange
airport = new Airport(700);
expectedOutput = 900;
// Act
airport.overrideCapacity(900);
// Assert
result = assertEquals(airport.maxCapacity, expectedOutput);
console.log(result);
