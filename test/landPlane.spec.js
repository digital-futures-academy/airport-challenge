// Test specification for landPlane method.

// Import any functions or frameworks needed e.g. assertEquals 
const { assertEquals } = require('../testFunctions');
const { Airport } = require('../src/Airport');
const { Plane } = require('../src/Plane')

// define variables that can be shared across all tests here to try and keep neat
let input, expectedOutput, actualOutput, result;
let testName = ``;

// set up new airport and plane object that can be used within multiple tests.
const airport = new Airport();
const plane = new Plane();


console.log(`=====landPlane.spec.js test results=====`)

// Test 1 - An instance of the class Airport should contain a method named "landPlane"
// Arrange
// Name the test.
testName = `Test 1: Method "landPlane" exists in class instance`;

// Create an instance of the Airport class as input. Define the expectedOutput as being the expected variable, we expect true as intend to use object.hasOwnProperty() to check, which returns a boolean.
input = airport;
expectedOutput = true;

// Act - Check whether the instance of the Airport class contains 'landPlane' using hasOwnProperty() and assign to actual output
actualOutput = input.hasOwnProperty('landPlane');

// Assert - use assertEquals to check whether expected and actual outputs match. Print the result to the console.
result = assertEquals(actualOutput, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)


// // Test 2 - On providing a Plane as an argument landPlane returns 'Success'.
input = plane;
expectedOutput = 'success'
actualOutput = airport.landPlane(input);
result = assertEquals(actualOutput, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)