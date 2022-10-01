const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;

console.log(`----------------------`);
console.log(`Test 1 - Airport's capacity is 2 and have 2 plane => True`)
// Arrange
airport = new Airport("Heathrow", 2, ['plane1', 'plane2']);
expected = true;

// Act
actual = airport.isAirportFull();

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Airport's capacity is 2 and have 2 plane => True is ${result}`);

// Clean up
airport = undefined;
expected = undefined;
actual = undefined;

console.log(`----------------------`);
console.log(`Test 2 - Airport's capacity is 20 and have 2 plane => False`)
// Arrange
airport = new Airport("Heathrow", 20, ['plane1', 'plane2']);
expected = false;

// Act
actual = airport.isAirportFull();

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Airport's capacity is 20 and have 2 plane => False is ${result}`);

// Clean up
airport = undefined;
expected = undefined;
actual = undefined;
airport = undefined;