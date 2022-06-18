const { assertEquals } = require("../test/test-framework")
const Airport = require("../src/airport")

// Initial Arrange 
let expectedOutput, actualOutput, result, input, testName, airportTest;

//  ---Test 1---
//Arrange
testName = `Test 1 = add one plane to an empty array- check the input matches what's added`
input = `plane1 `
expectedOutput = input;
airportTest = new Airport;

// Act 
airportTest.landedPlane(input);
actualOutput = airportTest.landedPlanes[0];

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


