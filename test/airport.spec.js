const { assertEquals } = require("./testFramework");
const Airport = require("../src/airport")

console.log(`===================== TEST 1 =====================`)
//Arrange
const testName = `Test to land a plane`;
const testPlane = {
    name: `Test plane`
};
expectedOutput = testPlane.name
//Act
testAirport = new Airport();
testAirport.landPlane(testPlane.name);
actualOutput = testAirport.planesInAirport[0];
//Assert
console.log(`--`)
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
