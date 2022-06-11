//acceptance Criteria
//airport should allow plane to land

const { assertEquals } = require("../test-framework");

//initial arrange
let expectedOutput, actualOutput, result;
let planeCanLand;
let testName = ``;

//Test 1
//arrange
testName = `Tes1: fail test `;
planeCanLand = true;
expectedOutput = true;

//act
actualOutput = landAPlane();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
