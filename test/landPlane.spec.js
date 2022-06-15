const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");

// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;

//  ---Test 1---
// Arrange
testName = `Test 1 = add one plane to an empty array- check the input matches what's added`;
input = `plane1`;
expectedOutput = input;
airportTest = new Airport;

// Act 
airportTest.landPlane(input);
actualOutput = airportTest.landedPlanes[0];

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 2---
// Arrange
testName = `Test 2 = add one plane to an empty array- check array.length increases`;
input = `plane1`;
expectedOutput = 1;
airportTest = new Airport;

// Act 
airportTest.landPlane(input);
actualOutput = airportTest.landedPlanes.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);




