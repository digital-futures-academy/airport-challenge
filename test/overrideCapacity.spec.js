const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let airport;
let newCapacity;

console.log(`----------------------`);
console.log(`Test 1 - Override capasity of airport to 50 => 50`)
// Arrange
airport = new Airport("Heathrow", 20);
newCapacity = 50;
expected = 50;

// Act
airport.changeCapasity(newCapacity);
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 Override capasity of airport to 50 => 50 is ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
newCapacity = undefined;
