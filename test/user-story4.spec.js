const Airport = require("../src/airport");
const Plane = require(`../src/Plane`);
const { assertEquals } = require(`../test/testing-framework`);


console.log(`:====================User Story 4====================:`);
console.log(`Test to check if plane has taken off from airport hence, decreasing planes by 1`);


//Arrange
let airport = new Airport();
let plane = new Plane();
let expected = 0;
let actual;

//Act
airport.getNumberOfPlane(plane);
airport.instructPlaneTakeOff();
actual = airport.getNumberOfPlane();

//Assert
result = assertEquals(actual, expected);

//Report 
console.log(`Test 1: Test to check if plane has taken off ${result}, ${result ? `PASS` : `FAIL`}`);
console.log(``);