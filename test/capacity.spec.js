const Airport = require("../src/airport")
const { assertEquals } = require("../test-framework")

// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;

//  ---Test 1--- 
// Arrange
testName = `Test 1 = check new instances of airport are created with default capacity of 100`;
airportTest = new Airport;
expectedOutput = 100;

// Act 
actualOutput = airportTest.getCapacity();

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 2--- 
// Arrange
testName = `Test 2 = check setCapacity() changes the default capacity to the desired one`;
airportTest = new Airport;
input = 200;
expectedOutput = input; //Find out if expectedOutput = 200; would be preferable

// Act 
actualOutput = airportTest.setCapacity(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


