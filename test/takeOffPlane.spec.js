const Airport = require("../src/airport");
const { assertArrayEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;
let plane;

console.log(`----------------------`);
console.log(`Test 1 - Plane1 take off from Airport['plane1', 'plane2', 'plane3'] =>  ['plane2', 'plane3']`);
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2', 'plane3']);
plane = 'plane1';
expected = ['plane2', 'plane3'];

// Act
airport.takeOff(plane);
actual = airport.planeList;

// Assert
result = assertArrayEquals(expected, actual);
console.log(`Test 1 - Plane1 take off from Airport['plane1', 'plane2', 'plane3'] =>  ['plane2', 'plane3'] is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

console.log(`----------------------`);
console.log(`Test 2 - Plane2 take off from Airport['plane1', 'plane2', 'plane3'] =>  ['plane1', 'plane3']`);
// Arrang1
airport = new Airport("Heathrow", 20, ['plane1', 'plane2', 'plane3']);
plane = 'plane2';
expected = ['plane1', 'plane3'];

// Act
airport.takeOff(plane);
actual = airport.planeList;

// Assert
result = assertArrayEquals(expected, actual);
console.log(`Test 2 - Plane2 take off from Airport['plane1', 'plane2', 'plane3'] =>  ['plane1', 'plane3'] is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;