const Airport = require("../src/airport")
const { assertEquals } = require("../test-framework")

// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;

//  ---Test 1--- 
// Should I be creating a mock plane here? 
// Arrange
testName = `Test 1 = check new instances of airport are created with default capacity of 100`;
expectedOutput = 100;
airportTest = new Airport;

// Act 
actualOutput = airportTest.getCapacity();

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
