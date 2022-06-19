const { assertEquals } = require("../test/test-framework")
const Airport = require("../src/airport")
const landPlane = require("../src/landPlaneFunction")

console.log('=== Test 1 ===')

// Initial Arrange 
let expectedOutput, actualOutput, result, airportTest;
let input = [];
let testName = ``;

//  ---Test 1---
//Arrange
testName = `Test 1 = add one plane to an empty array- check the input matches what's added`
input = `plane1 `
expectedOutput = input;
airportTest = new Airport;

// Act 
actualOutput = landPlane[input];
console.log(actualOutput)

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


