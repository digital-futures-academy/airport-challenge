const { assertEquals } = require("./testing-framework");
const { airport } = require("../src/airport");
const { weather } = require("../src/weather");

console.log("TEST 7: When it is stormy, don't land.")


// Arrange

weather.currentWeather = "Stormy"
expectedOutcome = false;
planeID = "3456"

// Act

actualOutput = airport.landPlane(planeID);

// Assert

result = assertEquals(actualOutput, expectedOutcome);

// Report

console.log(`Did the plane land when it was stormy? ${actualOutput}`)
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")
