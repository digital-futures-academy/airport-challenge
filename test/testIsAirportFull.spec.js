// Acceptance Criteria
// As a function,
// I want to be able to check if airport is full
// So that I can return boolean value on basis of list of planes in airport and capacity of airport.

const { assertEquals } = require("../test-framework");
const { isAirportFull } = require("../src/airport");
//initial arrange
let expectedOutput, actualOutput, result;
let planesList = [];
let testName = ``;

//Test1
//arrange 
testName = `Test1: fail test`;
expectedOutput = `no more landing! airport is full`;

//act
actualOutput = isAirportFull();

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(expectedOutput);
console.log(actualOutput);
console.log(result);

