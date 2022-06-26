const Airport = require("../src/airport");
const { assertEquals } = require("../testFramework");

//Fixtures
let testAirport, expectedResult, actualResult, result, name;
const testPlane = `testPlane`;

// landPlane tests
name = `landPlane Test 1 - item added to planesAtAirport Array`
console.log(`=== ${name} ===`);

// Arrange
testAirport = new Airport();
expectedResult = 1;
// Act
testAirport.landPlane(testPlane)
actualResult = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);
