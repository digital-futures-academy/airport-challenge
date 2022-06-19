const { assertEquals } = require("./assertEquals");
const Airport = require("../src/airport")

console.log(`=== Test 5 - ===`)
//Arrange
const testName = `Test 5 - an error message is thrown when trying to land a plane that already is at the airport`;
const testPlane = {
    name: `Test plane`
};
expectedOutput = `Error!! Plane is already at  the airport`
//Act
testAirport = new Airport();
testAirport.landPlane(testPlane)
console.log(testAirport.planesInAirport)
actualOutput = testAirport.landPlane(testPlane)
console.log(actualOutput)


//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `Fail`}`);

module.exports