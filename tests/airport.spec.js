const Airport = require("../src/airport");
const { assertEquals } = require("../testFramework");
const { assertTrue } = require("../testFramework");

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


name = `landPlane Test 2 - plane can be found in planesAtAirport Array`
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport
// Act
testAirport.landPlane(testPlane);
// Assert
result = assertTrue(testAirport.planesAtAirport.includes(testPlane))
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


// capacity setting tests
name = `capacity setting Test 1 - new airports have default capacity set to 5`
console.log(`=== ${name} ===`);

// Arrange
testAirport = new Airport();
// Act
actualResult = testAirport.capacity;
expectedResult = 5;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);

