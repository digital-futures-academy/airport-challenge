// Acceptance Criteria
// As a function,
// I want to be able to check if airport is full
// So that I can return boolean value on basis of list of planes in airport and capacity of airport.

//**References** 
const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");



//initial arrange
let expectedOutput, actualOutput, result, testName, planeID;


//Test1
//arrange 
testName = `Test1: when plan list is equal to airport capacity`;
expectedOutput = `Sorry airport is full`;
//**Instances of Airport class**
const airport1 = new Airport(`ap001`, planeID, 5);

//**Instances of Plane class and saving them in list of planes from Airport class**
planeID = new Plane(`pl001`);
airport1.setPlanesInAirport(planeID);
planeID = new Plane(`pl002`);
airport1.setPlanesInAirport(planeID);
planeID = new Plane(`pl003`);
airport1.setPlanesInAirport(planeID);
planeID = new Plane(`pl004`);
airport1.setPlanesInAirport(planeID);
planeID = new Plane(`pl005`);
airport1.setPlanesInAirport(planeID);
planeID = new Plane(`pl006`);






//act
actualOutput = airport1.isAirportFull();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
// console.log(airport1.getPlanesInAirport());
// console.log(actualOutput);
// console.log(airport1.getPlanesInAirport().length);
// console.log(airport1.capacity);
