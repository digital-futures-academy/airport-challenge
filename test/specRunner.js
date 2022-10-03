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
airport.add(plane);

// Act
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


//Test 2a is the airport plane capacity the default value
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the airport plane capacity is it's default value");

// Arrange
airport = new Airport();
expected = 3;


// Act
actual = airport.planesInAirport.length

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2a: Is the airport capacity set to the default value? : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

//Test 2b is the airport plane capacity the default value
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the airport plane capacity can have an overridden value");

// Arrange
airport = new Airport(5);
expected = 5;


// Act
actual = airport.planesInAirport.length

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2b: Is the airport capacity overridden with a custom capacity : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;