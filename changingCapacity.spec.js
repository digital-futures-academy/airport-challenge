const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport");

const testAirport = new Airport();
let = expectedOutput, actualOutput, result;
let input = [];
let testName = ``;

//arrange
testName = `Test 1 see default capacity`;
input = 10;
expectedOutput = 10;
testAirport = new Airport;
//act
actualOutput = testAirport.checkingCapacity(input);

//assert
result = assertEquals(expectedOutput, actualOutput);


//report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);

testName = `TEST 2 change capacity`;
input = 10;
expectedOutput = input

//act

actualOutput = testAirport.changingCapacity(input);

//assert
result = assertEquals(expectedOutput, actualOutput);


//report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);