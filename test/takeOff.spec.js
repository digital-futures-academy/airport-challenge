const { assertEquals } = require("./testFramework");
const Airport = require("../src/airport")
const Plane = require("../src/plane")

console.log(`===================== TEST 4 =====================`)
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
console.log(`The current planes in the airport are: ` + testAirport.planesInAirport)
actualOutput = testAirport.planesInAirport.includes(testPlane.name)
//Assert
console.log(`--`)
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

