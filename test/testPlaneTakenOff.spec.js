// Acceptance Criteria
// I want to be able to check plane has taken off or no

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");

//initial arrange
let testName, actualOutput, expectedOutput, result, airport1, planeID;

//arrange
testName = `Test1: to check plane has taken off`;
expectedOutput = `plane is not in airport`;
airport1 = new Airport(`ap002`, planeID, 5);
planeID = new Plane(`pl004`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl006`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl007`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl009`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl010`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl010`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl009`);


// planeID = new Plane(`pl005`, false);


//act
actualOutput = airport1.planeTakeOff(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);
console.log(airport1.getPlanesInAirport());

