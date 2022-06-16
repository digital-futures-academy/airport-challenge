const { assertTrue, assertFalse } = require("../test-framework");
const Plane = require("../src/plane");

// Initial arrange
let actualOutput, result, testName, planeTest;

//  ---Test 11--- 
// Arrange
testName = `Test 11 = check isAtAirport()returns true when a plane is at the airport`;
planeTest = new Plane('planeTest');
//This is a mock Airport to test the functionality of Plane on it's own
const testAirport = {
    getLandedPlanes() {
        return ['planeTest']; // So the planeTest is at the airport for testing purposes
    }
}

// Act 
actualOutput = planeTest.isAtAirport(testAirport);

// Assert
result = assertTrue(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 12--- 
// Arrange
testName = `Test 12 = check isAtAirport()returns false when a plane is not at the airport`;
planeTest = new Plane('planeTest');
const testAirport2 = {
    getLandedPlanes() {
        return [];
    }
}

// Act 
actualOutput = planeTest.isAtAirport(testAirport2);

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
