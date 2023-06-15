const { assertEquals } = require("./testingFramework");
const airport = require("../src/airport");
let actualOutput, expectedOutput, result;

//User Story 2- Test 1 : Setting the default airport capacity
console.log("--------User Story 2--------")
console.log("");
console.log("Test 1: Setting the default airport capacity")

//Arrange

expectedOutput = 10;

//Act

airport.defaultCapacity(expectedOutput);
actualOutput = airport.capacity;

//Assert

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test: Default airport capacity set: ${result}`);
console.log(`Test: ${result ? "PASS" : "FAIL"}`);
console.log("");


// Test 2 : Setting a system's response when attempting to override the default airport capacity with a large value.
console.log("Test 2: system's response when attempting to override the default airport capacity with a large value.")

//Arrange

expectedOutput = 20;

//Act

airport.defaultCapacity(expectedOutput);
actualOutput = airport.capacity;

//Assert

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test: Default airport capacity does not exceed the maximum capacity: ${result}`);
console.log(`Test: ${result ? "PASS" : "FAIL"}`);
console.log("");