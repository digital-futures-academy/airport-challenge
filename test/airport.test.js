const Airport = require("../src/airport");
const { assertEquals, assertTrue } = require("../specRunner");

let airport, expected, actual, result;
planes = ["DFA001", "DFA002", "DFA003", "DFA004", "DFA005"];

// User Story 1
// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane

// Tests 1a and 1b: 1(a) Return string confirming plane has landed, and 1(b) check array length
console.log('..............Test1 begins........................')
console.log(`Cleared to land, runway two seven Right.`)

// Arrange
airport = new Airport();
plane = planes[0];
expected = 1;

// Act
airport.land(plane);
actual = airport.arrPlanes.length;

// Assert
result = assertEquals(actual, expected);
testID = assertTrue(airport.arrPlanes.includes(plane));

console.log(`Test 1a: A plane has landed! We are expecting ${expected} plane(s) at the airport and there is/are currently ${actual} plane(s) at the airport.`)
console.log(`Test 1b: Correct number of planes at airport? ${result}`)
console.log(`Test 1c: The plane landed was/were ${plane}. Correct plane ID? ${testID}`)

// Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;