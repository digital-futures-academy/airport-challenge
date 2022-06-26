const { assertEquals } = require("../testFramework");
const Airport = require("../src/airport");

// Fixtures
let testAirport, expectedResult, actualResult, result, name;
const testPlane = `testPlane`;

// === landPlane tests ===
name = `landPlane Test 1 - item added to planesAtAirport array`;
console.log(`=== ${name} ===`);
// Arrange 
testAirport = new Airport();
expectedResult = 1;
// Act
testAirport.landPlane(testPlane);
actualResult = testAirport.planesAtAirport.length;
// Assert 
result = assertEquals(expectedResult, actualResult);
//report 
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);