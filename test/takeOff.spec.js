const { assertEquals } = require("./assertEquals");
const Airport = require("../src/airport")

console.log(`=== Test 4 - ===`)
//Arrange
const testName = `Test 4 - when the plane has taken off it in no longer in airport`;
const testPlane = {
    name: `Test plane`
};
expectedOutput = false
//Act
testAirport = new Airport();
testAirport.landPlane(testPlane)
console.log(testAirport.planesInAirport)
testAirport.takeOff(testPlane)
actualOutput = testAirport.planesInAirport.includes(testPlane)
console.log(testAirport.planesInAirport)
//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `Fail`}`);

module.exports