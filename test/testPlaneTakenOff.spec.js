// Acceptance Criteria
// I want to be able to check plane has taken off or no

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");

//initial arrange
let testName, actualOutput, expectedOutput, result, airport1, planeID;

//arrange
testName = `Test1: to check plan has taken off`;
expectedOutput = `yes plan has taken off`;
planeID = new Plane(`pl004`);
airport1 = new Airport(`ap002`, planeID, 5);

//act
actualOutput = airport1.getPlaneTakeOff();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);