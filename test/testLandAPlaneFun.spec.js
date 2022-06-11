//acceptance Criteria
//airport should allow plane to land

const { assertEquals } = require("../test-framework");
const { landAPlane } = require("../src/airport");
// require("../src/index");
//initial arrange
let expectedOutput, actualOutput, result;
let planeCanLand;
let testName = ``;

//Test 1
//arrange
testName = `Tes1: plan can land  `;
planeCanLand = false;
planeID = `pl003`;
expectedOutput = false;

//act
actualOutput = landAPlane(planeCanLand, planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);
console.log(expectedOutput);
console.log(result);
