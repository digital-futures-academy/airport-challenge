const { assertEquals } = require("../testFramework.js");
const Airport = require("../src/airport.js");
const Plane = require("../src/plane")

console.log(`====== Test 5 ======`)
//Arrange
const testName = `Test for an error message to be thrown when trying to land a plane that is already at the airport
and checking if plane has already taken off`;
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
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

module.exports