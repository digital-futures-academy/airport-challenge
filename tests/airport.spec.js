const Airport = require("../src/airport");
const { assertEquals } = require("../testFramework,");

// landPlane tests
console.log("landPlane Test 1 - item added to planesAtAirport Array");
//Fixtures
let testAirport, expectedResult, actualResult, result;
const testPlane = `testPlane`;

// Arrange
testAirport = new Airport();
expectedResult = 1;
// Act
testAirport.landPlane(testPlane)
actualResult = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(expectedResult, actualResult)