const { assertEquals } = require("../testFramework.js");
const Airport = require("../src/airport.js");
const Plane = require("../src/plane")





console.log(`====== Test 4 ======`)
//Arrange
const testName = `Test to confirm that once a plane has taken off; it's no longer at the airport`;
const testPlane = {
    name: `testPlane`
}
expectedOutput = false
//Act
testAirport = new Airport();
testAirport.landPlane(testPlane.name)
console.log(`The current planes in the airport are: ` + testAirport.planesInAirport)
testAirport.takeOff(testPlane.name)
actualOutput = testAirport.planesInAirport.includes(testPlane.name)
console.log(`The current planes in the airport are: ` + testAirport.planesInAirport)
//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

module.exports