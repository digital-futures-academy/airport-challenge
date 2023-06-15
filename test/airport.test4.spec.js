const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");

console.log("TEST 4: If the airport is full, don't land. Current airport capacity should not increase.")


// Arrange

airport.setMaxAirportCapacity(2);
let planeID = "123456";
airport.planesAtAirport = ["001", "002"];
expectedOutput = 2;

// Act

planeLanded = airport.landPlane(planeID); // Shouldn't land as airport is full.
actualOutput = airport.currentAirportCapacity();
console.log(`Current airport capacity is ${actualOutput}`)

// Assert

result = assertEquals(actualOutput, expectedOutput)

// Report

console.log(`Did the plane land? ${planeLanded}`);
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")
