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

// User Story 3
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full

// Tests: Check capacity and check array length
console.log('..............Testing begins........................')
console.log(`User Story 3: If capacity, land plane; if no capacity, don't land plane`)

// Arrange
airport = new Airport();
airport.setCapacity(5);
planes.forEach(plane => {
    airport.land(plane);
});
newPlane = "DFA006";
expected = 5;
console.log(`Pilot to air traffic controller, ${newPlane} is looking to land, is ${newPlane} cleared for landing?`)

// Act
airport.isCapacityFull();
airport.land(newPlane);
actual = airport.arrPlanes.length;

// Assert
result = assertEquals(actual, expected);

console.log(`Airport capacity is currently: ${airport.capacity}. Actual number of planes at the airport: ${actual}. Is the number of planes at airport as expected? ${result}`)

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// User Story 4
// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

// Tests: Check capacity and check array length
console.log('..............Testing begins........................')
console.log(`User Story 4: Cleared for take off, runway three four`)

// Arrange
console.log(`..............Setting up user story.................`)
airport = new Airport();
airport.setCapacity(5);
planes.forEach(plane => {
    airport.land(plane);
});
console.log(`..............Some time later........................`)
planeToTakeOff = planes[1];
expected = 4;
console.log(`${planeToTakeOff} line up and wait`)

// Act
airport.takeOff(planeToTakeOff);
actual = airport.arrPlanes.length;

// Assert
result = assertEquals(actual, expected);
testID = assertTrue(airport.arrPlanes.includes(planeToTakeOff));

console.log(`Test 1: See returned string above.`)
console.log(`Test 2: Is ${planeToTakeOff} at airport? ${testID}. Currently available planes: ${airport.arrPlanes}`)
console.log(`Test 3: Actual number of planes at the airport is currently ${actual}. Is the number of planes at airport as expected? ${result}`)

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;