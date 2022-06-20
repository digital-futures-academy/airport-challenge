const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport");

const testAirport = new Airport();
let = expectedOutput, actualOutput, result;
let input = [];
let testName = ``;

//arrange
testName = `Test 1 try to add plane when it is full`;
input = [1];
expectedOutput = `full`;
testAirport = new airport;
//act
actualOutput = testAirport.isAirportFull(input);

//assert
result = assertEquals(expectedOutput, actualOutput);


//report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);

