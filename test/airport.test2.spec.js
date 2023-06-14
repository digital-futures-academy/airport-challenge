const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");

console.log("TEST 2: Can I override the default airport capacity?")


// Arrange

let expectedOutput = 4000;
let capacity = 4000;

// Act 

console.log(airport.maxAirportCapacity); // confirms the default maxAirportCapacity before any changes.
airport.setAirportCapacity(capacity); // set the new capacity.
actualOutput = airport.maxAirportCapacity; // test to check that the default maxAirportCapacity was in fact changed.

// Assert 

result = assertEquals(actualOutput, expectedOutput);

// Report

console.log(`Airport capacity has been set to ${airport.maxAirportCapacity}.`);
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome).`);


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")


