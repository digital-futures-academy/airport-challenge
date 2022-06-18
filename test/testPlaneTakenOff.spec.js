// Acceptance Criteria
// I want to be able to check plane has taken off or no

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");

console.log(`******* Tests for plane take off ********`);
//Test 1
//initial arrange
let testName, actualOutput, expectedOutput, result, airport2, planeID;

//arrange
testName = `Test1: plane is not in airport already take off`;
expectedOutput = `plane is not in airport already take off`;
airport2 = new Airport(`ap002`, planeID, 5);
planeID = new Plane(`pl004`);
airport2.checkIfPlaneCanAddedInList(planeID);
planeID = new Plane(`pl006`);
airport2.setWeather();

//act
actualOutput = airport2.takeOffPlaneFromAirport(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);

//Test 2
//arrange
testName = `Test2: plane has taken off`;
expectedOutput = `plane has taken off`;
planeID = new Plane(`pl009`);
airport2.checkIfPlaneCanAddedInList(planeID);
planeID = new Plane(`pl010`);
airport2.checkIfPlaneCanAddedInList(planeID);
planeID = new Plane(`pl010`);
//act
actualOutput = airport2.takeOffPlaneFromAirport(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);