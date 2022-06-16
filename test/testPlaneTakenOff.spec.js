// Acceptance Criteria
// I want to be able to check plane has taken off or no

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");

//initial arrange
let testName, actualOutput, expectedOutput, result, airport1, planeID;

//arrange
testName = `Test1: to check plan has taken off`;
expectedOutput = true;
planeID = new Plane(`pl004`);
airport1 = new Airport(`ap002`, planeID, 5);
airport1.setHasPlaneTakenOff();

//act
actualOutput = airport1.getHasPlaneTakenOff();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);