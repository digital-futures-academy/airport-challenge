const Airport = require("../src/airport");
const Plane = require(`../src/Plane`);
const { assertEquals } = require(`../test/testing-framework`);


console.log(`:====================User Story 3====================:`);
console.log(`Test 1: Test to check if Airport is full`);

let actual, result;

//Arrange
let airport = new Airport();
let plane = new Plane();
let expected = true;

//Act
airport.landPlane(plane);
actual = airport.isAirportFull();

//Assert
result = assertEquals(actual, expected);

//Report 
console.log(`Test 1: Test to check if Airport is full ${result}, ${result ? `PASS` : `FAIL`}`);
console.log(``);

//clean up
result = undefined;
actual = undefined;
