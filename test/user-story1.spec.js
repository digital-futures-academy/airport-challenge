const Airport = require(`../src/airport`);
const Plane = require(`../src/Plane`);
const { assertEquals } = require(`../test/testing-framework`);

console.log(`:====================User Story 1====================:`);
(`Test 1: That no plane existed before landing`);

//Arrange 
let airport = new Airport();
let expected = 0;
let actual;

//Act
actual = airport.getNumberOfPlane();
//Assert
let result = assertEquals(actual, expected);

//Report 
console.log(`Test 1: That no plane existed before landing: ${result}, ${result ? `PASS` : `FAIL`}`);
console.log(``);

//clean up
result = undefined;
actual = undefined;

//////////////////////////////////////////////////////////////////////////////////////////////

(`Test 2: Test that plane has landed`);
//Arrange 
let airport1 = new Airport();
let plane = new Plane();
let expected1 = 1;
let actual1;

//Act
airport1.landPlane(plane);
actual1 = airport1.getNumberOfPlane();

//Assert
let result1 = assertEquals(actual1, expected1);

//Report 
console.log(`Test 2:  Test that plane has landed: ${result1}, ${result1 ? `PASS` : `FAIL`}`);
console.log(``);

//clean up
result = undefined;
actual = undefined;


