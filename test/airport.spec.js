const Airport = require("../src/airport");
const { assertEquals } = require("./test-framework");


console.log("=== Test 1 ===")


//Fixtures 
let testAirport;
const testPlane = 'testPlane';
testName = `Test1 - to landPlane by adding item to planesAtAirport array`;

//Arrange - objects needed for test 
testAirport = new Airport();
let airport, expectedResult, actualResult, result;

expectedResult = 1


//Act 
testAirport.landPlane(testPlane);
actualResult = testAirport.planesInAirport.length



//Assert 
result = assertEquals(expectedResult, actualResult)

console.log(`${testName}: ${result ? `FAIL` : `PASS`}`);