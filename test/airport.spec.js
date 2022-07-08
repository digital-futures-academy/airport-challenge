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

testName = `Test3 - returns a string stating the plane landed`;
console.log(`=== ${testName} ===`);

// Arrange - Create an airport for test 
testAirport = new Airport();

//Act
actualResult = testAirport.landPlane(testPlane)

//Assert
actualResult = assertTrue(actualResult.includes(testPlane))

console.log(`${testName} : ${result ? `PASS` : `FAIL`}`)



//   === capacity test ===
testName = `Test 1 - for setting the capacity, default capacity for new airport is 5 `;
console.log(`=== ${testName} ===`);

//Arrange - creating test airport
testAirport = new Airport();
expectedResult = 5;

//Act 
actualResult = testAirport.airportCapacity;

//Assert
result = assertEquals(expectedResult, actualResult);
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`)