// Acceptance Criteria
// As a function,
// I want to be able to check if airport is full
// So that I can return boolean value on basis of list of planes in airport and capacity of airport.

//**References** 
const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

//**Instances of airport class**
const airport1 = new Airport(capacity = 5);
// const airport1 = new Airport([Plane.plane3], 5);

//initial arrange
let expectedOutput, actualOutput, result, testName, planeID;


//Test1
//arrange 
testName = `Test1: when plan list is equal to airport capacity`;
expectedOutput = 5;
planeID = new Plane();


//act
actualOutput = airport1..isAirportFull();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);


//Test2
//arrange
testName = `Test1: when planes list is empty`;
expectedOutput = `airport is not full`;

//act
actualOutput = airport1.isAirportFull();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(expectedOutput);
console.log(actualOutput);
console.log(result);