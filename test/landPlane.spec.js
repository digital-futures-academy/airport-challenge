const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;
let plane;

console.log(`----------------------`);
console.log(`Test 1 - Land plane1 to empty airport => 1`);
// Arrage
airport = new Airport("Heathrow");
plane = `plane1`;
expected = 1;

// Act
airport.land(plane);
actual = airport.planeList.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 Plane1 landed to the airport => 1 is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;
