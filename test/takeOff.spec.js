const { assertEquals, assertFalse } = require("../test-framework");
const Airport = require("../src/airport")
// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;

//  ---Test 1--- 
// Arrange
testName = `Test 1 = check takeOff() removes a plane from the landedPlanes array- array.length reduces by one`;
airportTest = new Airport;
input = `plane1`;
airportTest.setCapacity(1);
airportTest.landPlane(input);
expectedOutput = 0;

// Act 
airportTest.takeOff(input);
actualOutput = airportTest.getLandedPlanes().length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 2--- 
// Arrange
testName = `Test 2 = check takeOff() removes the intended plane from the landedPlanes array- the plane is no longer in the array`;
airportTest = new Airport;
input = `plane1`;
airportTest.setCapacity(1);
airportTest.landPlane(input);

// Act 
airportTest.takeOff(input);
actualOutput = airportTest.getLandedPlanes().includes(input);
// .includes() checks if the input is part of the array. Should return false as it has been removed

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 3--- 
// Not sure if it's more appropriate to check if the return is the specific message we are coding, or if it is simply a string. Going to test both
// Arrange
testName = `Test 3 = check takeOff() returns a specific message confirming the plane took off`;
airportTest = new Airport;
input = `plane1`;
airportTest.setCapacity(1);
airportTest.landPlane(input);
expectedOutput = `${input} completed take off`

// Act 
airportTest.takeOff(input);
actualOutput = airportTest.takeOff(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 3--- 
// Arrange
testName = `Test 3 = check takeOff() returns a string`;
airportTest = new Airport;
input = `plane1`;
airportTest.setCapacity(1);
airportTest.landPlane(input);
expectedOutput = `string`;

// Act 
airportTest.takeOff(input);
actualOutput = typeof airportTest.takeOff(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);





