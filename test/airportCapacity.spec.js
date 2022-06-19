const { assertEquals } = require("./assertEquals");
const Airport = require("../src/airport")

console.log(`=== Test 2 - ===`)
//Arrange
const testName = `Test 2 - A default capacity is given to any new instance of airport class`;
expectedOutput = 10
//Act
testAirport = new Airport();
actualOutput = testAirport.capacity
//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `Fail`}`);

module.exports