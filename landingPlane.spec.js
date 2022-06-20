//initial Arrange 
const { assertEquals } = require("./test-framework");
const Airport = require("../src/airport")

const testAirport = new Airport();
let = expectedOutput, actualOutput, result;

let input = ``;
let testName = ``;


//arrange
testName = `Test 1 to see if plane has been added to airport`;
input = `plane1`;
expectedOutput = input;
testAirport = new Airport;

//act
actualOutput = testAirport.landPlane(input);

//assert
result = assertEquals(expectedOutput, actualOutput);


//report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);