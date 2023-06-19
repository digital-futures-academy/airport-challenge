const Airport = require("../src/airport");
const { assertEquals } = require(`../test/testing-framework`);


console.log(`:====================User Story 2====================:`);
console.log(`Test 1: Test to increase Airport capacity to 10`);

let actual, result;

//Arrange
let airport = new Airport();
let expected = 10;

//Act
actual = airport.increaseCapacity(9);

//Assert
result = assertEquals(actual, expected);

//Report 
console.log(`Test 1: Test to increase Airport capacity to 10 ${result}, ${result ? `PASS` : `FAIL`}`);
console.log(``);

//clean up
result = undefined;
actual = undefined;
