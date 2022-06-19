const { assertEquals } = require("./assertEquals");
const Airport = require("../src/airport")

console.log(`=== Test 3 - ===`)
//Arrange
const testName = `Test 3 - if at max capacity a plane should not be able to land`;
const testPlane = {
    name: `Test plane`
};
const testPlane2 = {
    name: `Test plane2`
}; const testPlane3 = {
    name: `Test plane3`
}; const testPlane4 = {
    name: `Test plane4`
}; const testPlane5 = {
    name: `Test plane5`
}; const testPlane6 = {
    name: `Test plane6`
}; const testPlane7 = {
    name: `Test plane7`
}; const testPlane8 = {
    name: `Test plane8`
}; const testPlane9 = {
    name: `Test plane9`
}; const testPlane10 = {
    name: `Test plane10`
}; const testPlane11 = {
    name: `Test plane11`
};
expectedOutput = `This airport is full! You cannot land here`
//Act
testAirport = new Airport();
actualOutput = testAirport.landPlane(testPlane)
actualOutput = testAirport.landPlane(testPlane2)
actualOutput = testAirport.landPlane(testPlane3)
actualOutput = testAirport.landPlane(testPlane4)
actualOutput = testAirport.landPlane(testPlane5)
actualOutput = testAirport.landPlane(testPlane6)
actualOutput = testAirport.landPlane(testPlane7)
actualOutput = testAirport.landPlane(testPlane8)
actualOutput = testAirport.landPlane(testPlane9)
actualOutput = testAirport.landPlane(testPlane10)
actualOutput = testAirport.landPlane(testPlane11)
console.log(actualOutput)
//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `Fail`}`);

module.exports