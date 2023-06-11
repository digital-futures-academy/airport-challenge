const { assertEquals } = require("./testing-framework");
const { landPlane } = require("../src/airport");


// Arrange

let airport = "Heathrow";

let planeID = "123456";

let expectedOutput = true;

// Act

actualOutput = landPlane(planeID);


// Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Has plane ${planeID} landed? ${result}`);
console.log(result ? `TEST PASSED` : `TEST FAILED (expectedOutcome is not equal to actualOutcome.)`);

