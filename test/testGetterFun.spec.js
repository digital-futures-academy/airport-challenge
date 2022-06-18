// Acceptance Criteria
// As a GETTER i want to help air traffic controller to avoid asking the airport to
// let planes take-off which are not at the airport, or land a plane that's already landed

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertTrue } = require("../test-framework");

//initial arrange
let actualOutput, result, planeID, airport3, testName;

//arrange
testName = `Test1: display list of planes in airport`;
planeID = new Plane(`pl001`);
airport3 = new Airport(`ap003`, planeID, 5);
airport3.addPlaneInAirport(planeID);
planeID = new Plane(`pl002`);
airport3.addPlaneInAirport(planeID);
planeID = new Plane(`pl003`);
airport3.addPlaneInAirport(planeID);
planeID = new Plane(`pl004`);
airport3.addPlaneInAirport(planeID);
planeID = new Plane(`pl005`);
airport3.addPlaneInAirport(planeID);

//act
actualOutput = airport3.getPlanesInAirport();

//assert
result = assertTrue(actualOutput?.getPlanesInAirport());

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
// console.log(airport3.getPlanesInAirport());