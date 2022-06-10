const { assertEquals } = require("../test-framework");
const { landPlane } = require("../src/airport");

// Initial arrange
let expectedOutput, actualOutput, result;
let input = ``;
let testName = ``;

//  ---Test 1---
// Arrange
testName = `Test 1 = add one plane to an empty array`;
input = `plane1`;
expectedOutput = [`plane1`];

// Act 
actualOutput = landPlane(input);
// console.log(expectedOutput);
// console.log(actualOutput);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(result);

// // Report 
// console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);






