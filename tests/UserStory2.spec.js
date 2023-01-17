const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');

// Test 1
console.log(`*** Check the value returned for default airport capacity ***`);

let expectedOutput;
let input;
let actualOutput, result;

// Arrange
const airport1 = new Airport
expectedOutput = 10;
actualOutput, result;

// Act
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`correct default capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;
