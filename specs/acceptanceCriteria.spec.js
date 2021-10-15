const Airport = require('../src/airport');
const assertEquals = require('../test-framework');

// Test1
console.log("Test1 - Testing that we can land planes");
// Step1 - Arrange
let actualOutput, expectedOutput, result;

let airport = new Airport();
let plane = new Plane();
expectedOutput = ['plane'];

// Step2 - Act
actualOutput = airport.landPlane(plane);

// Step3 - Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);
