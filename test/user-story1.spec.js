const Airport = require(`../src/airport`);
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