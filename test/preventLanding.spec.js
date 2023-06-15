const { assertEquals } = require("./testingFramework");
const airport = require("../src/airport");
let actualOutput, expectedOutput, result;
const plane = { id: '9A06' };

//User Story 3 - Test 1: Prevent Landing When the Airport is Full
console.log("User Story 3 - Test 1: Prevent Landing When the Airport is Full");

// Arrange
expectedOutput = false;

// Act
airport.landPlane(plane);
actualOutput = airport.isFull();

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test: Prevent landing when airport is full: ${result}`);
console.log(`Test: ${result ? "PASS" : "FAIL"}`);
console.log("");