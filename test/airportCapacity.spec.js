const { assertEquals } = require("./testingFramework");
const airport = require("../src/airport");
let actualOutput, expectedOutput, result;

//Test : Setting the default airport capacity
console.log("Test : Setting the default airport capacity")

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
