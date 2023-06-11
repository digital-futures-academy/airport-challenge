const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");

console.log("TEST 3: Is the airport full?")

// Arrange

airport.currentAirportCapacity = 2000;

expectedOutput = false;

// Act

actualOutput = airport.isFull(); // FIX IS FULL METHOD !!!!!

console.log(`Is the airport full? ${actualOutput}`)

// Assert

result = assertEquals(actualOutput, expectedOutput)
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)

// Report

console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")

