const Airport = require("../src/airport");
const { assertEquals, assertTrue } = require("../specRunner");

let airport, expected, actual, result;
planes = ["DFA001", "DFA002", "DFA003", "DFA004", "DFA005"];

// User Story 1
// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane

// Tests 1a and 1b: 1(a) Return string confirming plane has landed, and 1(b) check array length
console.log('..............Testing begins........................')
console.log(`User Story 1: Cleared to land, runway two seven Right.`)

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

// User Story 2
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

// Tests: Check default and new capacity
console.log('..............Testing begins........................')
console.log(`User Story 2: Override airport capacity`)

// Arrange
airport = new Airport();
defaultCapacity = airport.capacity;
expected = 5

// Act
actual = airport.setCapacity(5);

// Assert
result = assertEquals(actual, expected);
console.log(`Default capacity: ${defaultCapacity}, new capacity: ${actual}. Is the capacity as expected? ${result}`)

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;