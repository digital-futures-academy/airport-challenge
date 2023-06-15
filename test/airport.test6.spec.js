const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");
const { weather } = require("../src/weather");

console.log("TEST 6: When it is stormy, don't take off.")

// Arrange

weather.currentWeather = "Stormy"
expectedOutcome = false;
planeID = "3456"
airport.planesAtAirport = ["3456"]

// Act

actualOutput = airport.planeTakeOff(planeID);

// Assert

result = assertEquals(actualOutput, expectedOutcome);

// Report

console.log(result)
console.log(`Did the plane take off when it was stormy? ${actualOutput}`)
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")
