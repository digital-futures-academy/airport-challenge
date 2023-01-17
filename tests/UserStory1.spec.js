const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

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

// Test 2
console.log(`*** Check that only Plane types are able to land at the Airport when planeLands ***`);

// Arrange
const plane1 = new Plane()
expectedOutput = true;
input = plane1;
actualOutput, result;

// Act
actualOutput = input instanceof Plane

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`is a plane: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;
