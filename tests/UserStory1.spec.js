const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');

// Test 1
console.log(`***Length of planeAtAiport array at the Airport increases by 1 when planeLands ***`);

let expectedOutput;
let input;
let actualOutput, result;

// Arrange
const airport1 = new Airport
expectedOutput = 1;
input = 'plane1';
actualOutput, result;

// Act
airport1.planeLands(input)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`plane landed: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;
