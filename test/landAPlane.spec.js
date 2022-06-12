const { assertEquals } = require("../test-framework");
const { landAPlane } = require("../src/landAPlaneFunction");


// Initial arrange
let expectedOutput, actualOutput, result;
let input = [];
let testName = ``;

// Test 1
// arrange
testName = `Test 1 - Add a plane to airport's landed planes list`;
input = "PLANE1";
expectedOutput = "PLANE1";

// act
actualOutput = landAPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// Test 2