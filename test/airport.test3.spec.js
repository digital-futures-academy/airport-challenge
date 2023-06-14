const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");

console.log("TEST 3: Is the airport full?")


// Arrange

airport.currentAirportCapacity = 5000;
expectedOutput = true;

// Act

actualOutput = airport.isFull();
console.log(`Is the airport full? ${actualOutput}`)

// Assert

result = assertEquals(actualOutput, expectedOutput)

// Report

console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")

