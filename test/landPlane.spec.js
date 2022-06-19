const { assertEquals } = require("./assertEquals");
const Airport = require("../src/airport")


console.log(`=== Test 1 - ===`)
//Arrange
const testName = `Test 1 - to land a plane`;
const testPlane = {
    name: `Test plane`
};
expectedOutput = testPlane.name
//Act
testAirport = new Airport();
testAirport.landPlane(testPlane)
actualOutput = testAirport.planesInAirport[0].name;
//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `Fail`}`);

module.exports





