const { assertEquals } = require("./testFramework");
const Airport = require("../src/airport")

console.log(`===================== TEST 2 =====================`)
//Arrange
const testName = `Test to check capacity`;
expectedOutput = 10
//Act
testAirport = new Airport();
actualOutput = testAirport.capacity
console.log(`The capacity of this airport is: ` + testAirport.capacity)
//Assert
console.log(`--`)
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

