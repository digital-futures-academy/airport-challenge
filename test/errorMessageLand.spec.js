const { assertEquals } = require("./testFramework");
const Airport = require("../src/airport")
const Plane = require("../src/plane")

console.log(`===================== TEST 5 =====================`)
//Arrange
const testName = `Test for an error message to be thrown when trying to land a plane that is already at the airport and when trying to get a plane to take off that has already taken off`;
const testPlane = {
    name: `Test plane`
};
expectedOutput = `Error - Plane has already taken off`
//Act
testAirport = new Airport();
testAirport.landPlane(testPlane.name);
console.log(`The current planes in the airport are: ` + testAirport.planesInAirport)
actualOutput = testAirport.landPlane(testPlane.name)
console.log(actualOutput)
testAirport.takeOff(testPlane.name);
actualOutput = testAirport.takeOff(testPlane.name)
console.log(`The current planes in the airport are: ` + testAirport.planesInAirport)
console.log(actualOutput)
//Assert
console.log(`--`)
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

