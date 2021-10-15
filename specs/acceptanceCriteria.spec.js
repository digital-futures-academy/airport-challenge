const Airport = require('../src/Airport');
const assertEquals = require('../test-framework');
const Plane = require('../src/Plane');

// Test1
console.log("Test1 - Testing that we can land planes");
// Step1 - Arrange
let actualOutput, expectedOutput, result;

let airport = new Airport();
let plane = new Plane();
expectedOutput = [plane];

// Step2 - Act
actualOutput = airport.landPlane(plane);

// Step3 - Assert
// seems like js cannot compare arrays for identity
result = assertEquals(actualOutput.toString(), expectedOutput.toString());
console.log(result);
