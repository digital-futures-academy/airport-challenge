const { assertEquals } = require("./testing-framework");
const { weather } = require("../src/weather");

console.log("Testing that the weather can be stormy or sunny.");
console.log("Testing the setWeather()function works as expected.");

// Arrange

let actualOutcome;
let expectedOutcome = true;

// Default weather is sunny.

// Act

for (i = 0; i <= 10; i++) {
    result = weather.setWeather();
    console.log(result);
    if (result == "Stormy") {
        actualOutcome = true;
        break;
    }
}

// Assert

finalResult = assertEquals(actualOutcome, expectedOutcome);

// Report

console.log(" ")
console.log(`Does the setWeather() function work as expected? Can it be stormy or sunny? ${finalResult}`)
console.log(finalResult ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`)


console.log("*********************************************")
console.log("*********************************************")
console.log("                                             ")

