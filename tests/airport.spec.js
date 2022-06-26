const { assertEquals, assertTrue } = require("../testFramework");
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


// === landPlane tests ===
name = `landPlane Test 2 - plane can be found in planesAtAirportArray`;
console.log(`=== ${name} ===`);
// Arrange 
testAirport = new Airport();
// Act
testAirport.landPlane(testPlane);
// Assert 
result = assertTrue(testAirport.planesAtAirport.includes(testPlane));
//report 
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


// === landPlane tests ===
name = `landPlane Test 3 - landPlane returns string that confirms THE plane landed`;
console.log(`=== ${name} ===`);
// Arrange 
testAirport = new Airport();
// Act
actualResult = testAirport.landPlane(testPlane);
// Assert 
result = assertTrue(actualResult.includes(testPlane));
//report 
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);