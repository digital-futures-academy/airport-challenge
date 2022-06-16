const { assertTrue, assertFalse } = require("../test-framework");
const Airport = require("../src/airport")

// Initial arrange
let result, actualOutput, input1, input2, testName, airportTest;

//  ---Test 5--- 
// Arrange
testName = `Test 5 = check an instance of plane can't be added to landedPlanes when the airport is at capacity`;
airportTest = new Airport;
input1 = `plane1`;
input2 = `plane2`;
airportTest.setCapacity(1); //Setting capacity to 1 so we can test if we can add more than one plane
airportTest.landPlane(input1); //Now the airport is full

// Act 
actualOutput = airportTest.landPlane(input2);
actualOutput = airportTest.getLandedPlanes().includes(input2);
// Should return false as the plane should be able to land

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 6--- 
// Arrange
// This is not a requirement, but it makes sense to return an error if not able to land the plane (may be wrong and was best to stick to the explicit requirement)
testName = `Test 6 = check an instance of plane can't be added to landedPlanes when the airport is at capacity. Throw error message in that case`;
airportTest = new Airport;
input1 = `plane1`;
input2 = `plane2`;
airportTest.setCapacity(1);
airportTest.landPlane(input1);

// Act 
actualOutput = airportTest.landPlane(input2);

// Assert
result = assertTrue(actualOutput instanceof Error);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);