const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport");

const testAirport = new airport();
let = expectedOutput, actualOutput, result;
let input = ``;
let testName = ``;

//arrange
testName = `Test 1 confirming plane is in the airport`;
input = `plane1`;
expectedOutput = `plane in Airport`;
testAirport = new Airport;
//act
actualOutput = testAirport.confirmingWherePlanesAre(input);

//assert
result = assertEquals(expectedOutput, actualOutput);


//report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);