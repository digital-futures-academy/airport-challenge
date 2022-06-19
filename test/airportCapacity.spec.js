const { assertEquals } = require("../testFramework.js");

const Airport = require("../src/airport.js");


console.log(`====== Test 2 ======`)


//Arrange
const testName = `Test to check capacity`;
expectedOutput = 10
//Act
testAirport = new Airport();
actualOutput = testAirport.capacity
console.log(`capacity of airport is:` + testAirport.capacity)
//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

module.exports