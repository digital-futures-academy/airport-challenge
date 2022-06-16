// Acceptance Criteria
// As a function,
// I want to be able to control if plane can land or not

//**References** 
const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");


//initial arrange
let expectedOutput, actualOutput, result, planeID;
let testName = ``;


//Test 1
//arrange
testName = `Tes1: plan can land because airport is not full `;
expectedOutput = `Plan has been landed`;
//**Instances of airport class**
const airport1 = new Airport(`ap002`, planeID, 5);

//**Instance of plane class
planeID = new Plane(`pl004`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl006`);

//act
actualOutput = airport1.landAPlane(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);


//Test 1
//arrange
testName = `Tes1: plan cannot land because airport is full `;
expectedOutput = `Sorry airport is full, Plan cannot land`;


//**Instance of plane class
planeID = new Plane(`pl004`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl006`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl007`);
airport1.addPlaneInAirport(planeID);
planeID = new Plane(`pl009`);


//act
actualOutput = airport1.landAPlane(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);
console.log(airport1.getPlanesInAirport());
