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


// === capacity setting tests ===
name = `capacity setting Test 1 - new airports have default capacity set to 50`;
console.log(`=== ${name} ===`);
// Arrange 
testAirport = new Airport();
expectedResult = 50;
// Act
actualResult = testAirport.capacity;
// Assert 
result = assertEquals(expectedResult, actualResult);
//report 
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


// === capacity setting tests ===
name = `capacity setting Test 2 - setCapacity changes airport's capacity value`;
console.log(`=== ${name} ===`);
// Arrange 
testAirport = new Airport();
expectedResult = 100;
// Act
testAirport.setCapacity(expectedResult);
actualResult = testAirport.capacity;
// Assert 
result = assertEquals(expectedResult, actualResult);
//report 
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);