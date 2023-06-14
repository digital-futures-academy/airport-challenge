const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");


console.log("TEST 5: Instruct the airport to let a plane take off and confirm that the plane has left the airport.")


// Arrange

airport.currentAirportCapacity = 4000;
let planeID = "78910"
airport.planesAtAirport = ["123456", "78910"];
console.log(`Planes at airport: ${airport.planesAtAirport}`)
let expectedOutcome = true;

// Act

planeDeparted = airport.planeTakeOff(planeID); // Plane only takesOff if it is at the airport. 
let actualOutcome = planeDeparted;

// Assert

result = assertEquals(actualOutcome, expectedOutcome);

// Report

console.log(`Did plane ${planeID} take off? ${actualOutcome}.`)
console.log(`Current airport capacity is now : ${airport.currentAirportCapacity}`) // Confirms plane has left the airport.
console.log(`Planes at airport now: ${airport.planesAtAirport}`) // Confirms plane has left the airport.
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")
