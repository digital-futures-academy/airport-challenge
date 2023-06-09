const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected;
const plane = `plane`;



console.log(`Test 1`);
console.log(`==============================================`)
console.log(`Planes can land in the airport`);

console.log(`ensure that planes can land in Airport checking 
that the number of planes at the airport increases`);

// Arrange
expected = 1;


// Act
airport.landPlane(plane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 plane landed successfully: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;
