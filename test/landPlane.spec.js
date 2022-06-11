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


// Test 2 - On providing a Plane as an argument landPlane returns a success message.
testName = `Test 2: On providing a Plane as an argument landPlane returns a success message`;
input = plane;
expectedOutput = 'success'
actualOutput = airport.landPlane(input);
result = assertEquals(actualOutput, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)


// Test 3 - on providing an argument that is not a plane returns an error message
testName = `Test 3: On providing an argument that is not a plane returns an error message`;
input = `Not a plane`;
expectedOutput = `Error: no Plane provided`;
actualOutput = airport.landPlane(input);
result = assertEquals(actualOutput, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)

// Test 4 - A Plane's state changes from "flying" to "landed" after being passed into landPlane.
testName = `Test 4: A Plane's state changes from "flying" to "landed" after being passed into landPlane.`;
input = plane
input.state = 'flying'; // Ensure the plane's state is set to a value other than the expected output
expectedOutput = 'landed';
airport.landPlane(plane) // This should result in a change to the plane's state
actualOutput = input.state; //this should have changed to 'landed' if landPlane worked
result = assertEquals(actualOutput, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)

