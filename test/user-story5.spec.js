const Airport = require("../src/airport");
const Plane = require(`../src/Plane`);
const { assertEquals } = require(`../test/testing-framework`);


console.log(`:====================User Story 5====================:`);
console.log(`Test to check plane can only land once`);


//Arrange
let airport = new Airport();
let plane = new Plane();
let expected = 1;
let actual;

//Act
airport.getNumberOfPlane(plane);
airport.landPlaneAgain();
actual = airport.getNumberOfPlane();

//Assert
result = assertEquals(actual, expected);

//Report 
console.log(`Test 1: Test to check plane can only land once ${result}, ${result ? `PASS` : `FAIL`}`);
console.log(``);

//clean up
result = undefined;
actual = undefined;


console.log(`Test 2: Test to check plane cannot take off if not at the airport`);


//Arrange
let airport1 = new Airport();
let plane1 = new Plane();
let expected1 = 0;
let actual1;

//Act
airport1.getNumberOfPlane(plane1);
airport1.PreventPlaneTakeOff();
actual1 = airport1.getNumberOfPlane();

//Assert
result = assertEquals(actual1, expected1);

//Report 
console.log(`Test 2: Test to check plane cannot take off if not at the airport ${result}, ${result ? `PASS` : `FAIL`}`);
console.log(``);

//clean up
result = undefined;
actual = undefined;
