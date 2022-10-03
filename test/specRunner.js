const { assertEquals } = require("../test/testing-framework");
const Airport = require("../src/airport");

let expected, actual, result, airport, plane;

//Test 1 is the plane landing in the airport
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Landing the plane in the airport");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
expected = plane.id;

// Act
airport.add(plane);
actual = airport.planesInAirport[0].id

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Is a plane landing in the airport: ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;