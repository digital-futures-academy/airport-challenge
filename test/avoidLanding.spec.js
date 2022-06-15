const { assertTrue } = require("../test-framework");
const Airport = require("../src/airport")

// Initial arrange
let result, actualResult, input1, input2, testName, airportTest;

//  ---Test 1--- 
// Initially I wanted to create a test that would simply check if I am unable to land a further plane after meeting capacity, but couldn't think of an approach that would let me test that, so decided to go straight for the Error approach. 

// Arrange
testName = `Test 1 = check an instance of plane can't be added to landedPlanes when the airport is at capacity. Throw error message in that case`;
airportTest = new Airport;
input1 = `plane1`;
input2 = `plane2`;
airportTest.setCapacity(1); //Setting capacity to 1 so we can test if we can add more than one plane
airportTest.landPlane(input1); //Now the airport is full

// Act 
actualResult = airportTest.landPlane(input2);

// Assert
result = assertTrue(actualResult instanceof Error);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);