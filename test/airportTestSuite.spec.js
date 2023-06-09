const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected;
const plane1 = { ID: `plane1` };



console.log(`Test 1`);
console.log(`==============================================`)
console.log(`Planes can land in the airport`);

console.log(`ensure that planes can land in Airport checking 
that the number of planes at the airport increases`);

// Arrange
expected = 1;


// Act
airport.landPlane(plane1);
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

console.log(`Test 2`);
console.log(`==============================================`)
console.log(`The actual plane I want to land does land in the airport`);

console.log(`ensure that the right plane can land in Airport checking 
their ID`);

// Arrange



// Act
airport.landPlane(plane1);
actual = airport.planesStanding[0];

// Assert
result = assertEquals(actual, plane1);

// Report

console.log(`Test 2: plane1 plane landed successfully: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;


console.log(`Test 3`);
console.log(`==============================================`)
console.log(`Only identifiable planes can land`);

console.log(`Planes without an ID cannot land in the airport`);

// Arrange
const unknownPlane = { desc: `suspicious` };
expected = 0;

// Act
airport.landPlane(unknownPlane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: Unknown planes do not get to land: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);