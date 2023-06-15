const { assertEquals } = require("./testingFramework");
const airport = require("../src/airport");
let actualOutput, expectedOutput, result;
const plane = { id: 'I007' };

//User story 4
// Test: Instructing the airport to let a plane take off and confirming it is no longer in the airport
console.log("--------User Story 4--------")
console.log("");
console.log("Test 1: Instructing the airport to let a plane take off and confirming it is no longer in the airport");

// Arrange
airport.listOfPlanes = [plane];
expectedOutput = "Plane take-off confirmed";

// Act
actualOutput = airport.takeOff(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test: Plane take-off confirmed: ${result}`);
console.log(`Test: ${result ? "PASS" : "FAIL"}`);
console.log("");