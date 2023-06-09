// Test 1: Instruct the airport to land a plane using landPlane and expect to display suitable message
const { assertEquals } = require("./testing-framework");

let actual, expected, result;

console.log(`Test 1`);
console.log(`==============================================`);
console.log(``);

// Arrange
expected = "Time to land the plane";
plane1 = { id: "plane1" };

// Act
actual = airport.landPlane(plane1);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: message displayed: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);