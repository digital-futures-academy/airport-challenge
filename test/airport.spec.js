const Airport = require("../src/airport");
const { assertEquals, assertTrue } = require("../test-framework");

console.log("=== Test 1 ===")


//Fixtures 
let testAirport, expectedResult, actualResult, result, testName;
const testPlane = 'testPlane';
testName = `Test1 - to landPlane by adding item to planesInAirport array`;

//Arrange - objects needed for test 
testAirport = new Airport();
expectedResult = 1


//Act 
testAirport.landPlane(testPlane);
actualResult = testAirport.planesInAirport.length;



//Assert 
result = assertEquals(expectedResult, actualResult)

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = `Test2 - finding the plane in the planeInAirport array`
console.log(`=== ${testName} ===`);

//Arrange
testAirport = new Airport();

//Act
testAirport.landPlane(testPlane);

//Assert
result = assertTrue(testAirport.planesInAirport.includes(testPlane));

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)
