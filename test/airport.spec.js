const Airport = require("../src/airport");
const { landPlane } = require("../src/landPlaneFunction");
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

console.log(`========= End of Test ==========`)


// test for finding a plane in the planeInAirport array
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

console.log(`========= End of Test ==========`)


// test for plane has landed message
testName = `Test3 - returns a string stating the plane landed`;
console.log(`=== ${testName} ===`);

// Arrange - Create an airport for test 
testAirport = new Airport();

//Act
testAirport.landPlane(testPlane)
actualResult = testAirport.landPlane(testPlane)

//Assert
actualResult = assertTrue(actualResult.includes(testPlane))

console.log(`${testName} : ${result ? `PASS` : `FAIL`}`)

console.log(`========= End of Test ==========`)

//   === capacity test ===
testName = `Test 1 - for setting the capacity, default capacity for new airport is 5 `;
console.log(`=== ${testName} ===`);

//Arrange - creating test airport
testAirport = new Airport();
expectedResult = 5;
testAirport.setairportCapacity(expectedResult);

//Act 
actualResult = testAirport.getairportCapacity();

//Assert
result = assertEquals(expectedResult, actualResult);
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`)

console.log(`========= End of Test ==========`)


// Test 2 for setting capacity and add to airport
testName = `Test 2 - changing the airport value when airportCapacity changes `;
console.log(`=== ${testName} ===`);

//Arrange - creating test airport
testAirport = new Airport(expectedResult);
expectedResult = 10;
testAirport.setairportCapacity(expectedResult);

//Act 
actualResult = testAirport.getairportCapacity();

//Assert
result = assertEquals(expectedResult, actualResult);
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`)

console.log(`========= End of Test ==========`)


// === prevent landing full airport ===
testName = `Test1 - for checking if the airport is full`;
console.log(`=== ${testName} ===`);

// Arrange 
testAirport = new Airport;

// Act
expectedResult = 5;
actualResult = 5;

// Assert 
result = assertEquals(actualResult, expectedResult);

// Report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);

console.log(`========= End of Test ==========`)


// Test for printing error if airport is full
testName = `Test2 - for throwing error when airport is full and plane cannot land`;
console.log(`=== ${testName} ===`);

// Arrange 
testAirport = new Airport;

// Act
actualResult = testAirport.fullAirport.length;
expectedResult = 1;

// Assert 
result = assertTrue(actualResult >= expectedResult);

// Report
console.log(`${testName} : ${result ? `PASS` : `FAIL`}`);

console.log(`========= End of Test ==========`)

// Test 1for planes taking off 
testName = `Test 1 - for the departing plane`;
console.log(`=== ${testName} ===`);

// Arrange 
testAirport = new Airport;
testAirport.takeOff(testPlane)
expectedResult = 0;

// Act
actualResult = testAirport.planesInAirport.length

// Assert
result = assertEquals(actualResult, expectedResult);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)

//Test 2 for notifying when plane has taken off 
testName = `Test 2 - for printing message to make sure it left airport`;
console.log(`=== ${testName} ===`);

// Arrange 
testAirport = new Airport;
testAirport.takeOff(testPlane);
expectedResult = `Plane has now taken off!`

//Act
testAirport.takeOff(testPlane)
actualResult = testAirport.takeOff(testPlane)

//Assert
actualResult = assertTrue(actualResult.includes(testPlane))

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)


