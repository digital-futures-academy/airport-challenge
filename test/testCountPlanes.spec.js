//acceptance criteria
//get number of planes on airport

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");

//initial arrange
let expectedOutput, actualOutput, result, testName, planeID, airport;
//Test 1
//arrange
testName = `Test1 : number of planes on airport ap001`;
planeID = new Plane(`pl001`);
airport = new Airport(`ap001`, planeID, 5);
airport.addPlaneInAirport(planeID);
planeID = new Plane(`pl003`);
airport.addPlaneInAirport(planeID);
airport.setCountPlanes();
expectedOutput = `Number of planes on ap001 is 2`;

// planeID = new Plane(`pl002`);
// airport = new Airport(`ap002`, planeID, 5);
// airport.addPlaneInAirport(planeID);
// planeID = new Plane(`pl005`);
// airport.addPlaneInAirport(planeID);
// planeID = new Plane(`pl007`);
// airport.addPlaneInAirport(planeID);
// planeID = new Plane(`pl009`);
// airport.addPlaneInAirport(planeID);

// planeID = new Plane(`pl010`);
// airport.addPlaneInAirport(`ap003`, planeID, 5);
// airport.addPlaneInAirport(planeID);
// planeID = new Plane(`pl008`);
// airport.addPlaneInAirport(planeID);
// planeID = new Plane(`pl006`);
// airport.addPlaneInAirport(planeID);

//act
actualOutput = airport.getCountPlanes();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);
