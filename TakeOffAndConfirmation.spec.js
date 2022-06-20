const { assertEquals } = require("./test-framework");
const Airport = require("../src/airport");
const Airport = require("../src/airport");

const testAirport = new airport();
let = expectedOutput, actualOutput, result;
let input = ``;
let testName = ``;

//arrange
testName = `Test 1 to see if plane has left the airport list`;
input = `plane1`;
expectedOutput = input;
testAirport = new Airport;

//act

actualOutput = testAirport.takeOff(input);

//assert
result = assertEquals(expectedOutput, actualOutput);


//report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);