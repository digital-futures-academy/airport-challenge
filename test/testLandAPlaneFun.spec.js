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
testName = `Tes1: fail test `;
planeCanLand = true;
planeID = `pl003`;
expectedOutput = true;

//act
actualOutput = landAPlane(planeCanLand, planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
