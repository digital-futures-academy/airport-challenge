const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");


console.log("TEST 1: Did the plane land?")


// Arrange

airport.planesAtAirport = ["78910"]
let planeID = "123456";
let expectedOutput = true;

// Act

actualOutput = airport.landPlane(planeID);

// Assert

result = assertEquals(actualOutput, expectedOutput);

//Report

console.log(`Has plane ${planeID} landed? ${actualOutput}`);
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome).`);


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")


