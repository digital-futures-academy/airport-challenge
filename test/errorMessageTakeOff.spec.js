const { assertEquals } = require("./assertEquals");
const Airport = require("../src/airport")


console.log(`=== Test 6 - ===`)
//Arrange
const testName = `Test 6 - an error message is thrown when trying to take off a plane that does not exist at airport`;
const testPlane = {
    name: `Test plane`
};
expectedOutput = `Error!! Plane has already taken off`
//Act
testAirport = new Airport();
testAirport.takeOff(testPlane)
console.log(testAirport.planesInAirport)
actualOutput = testAirport.takeOff(testPlane)
console.log(actualOutput)


//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `Fail`}`);

module.exports