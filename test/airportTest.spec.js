const Airport = require("../src/airport.js");
const { assertEquals } = require("../testing-framework.js");

// Test 1 - Instructing the plane to land
console.log(`============================`);

// Arrange
let airport = new Airport;
let plane1 = { id: `Plane1` };
let expected = 1;

// Act 
airport.landPlane(plane1);
let actual = airport.planeList.length;

// Assert
let result = assertEquals(actual, expected);
console.log(`Test 1: Plane1 has landed at the airport => 1 is: ${result}`);

// Test 2 - Changing the airport capacity
console.log(`============================`);

// Arrange
expected = 2;

// Act
airport.changeCapacity(expected);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Change capacity of the airport hangar => 2 is: ${result}`);

// Test 3 - Prevent landing planes if the airport is full
console.log(`============================`);

// Arrange
expected = true;
airport.changeCapacity(1);

// Act
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 3: Checks if the airport is full => true is: ${result}`);

// Test 4 - Instruct a plane to take off and check if it has left the airport
console.log(`============================`);

// Arrange
airport.changeCapacity(3);
airport.planeList = [{ id: `Plane1` }, { id: `Plane2` }, { id: `Plane3` }];
expected = false;
let plane2 = { id: `Plane2` };

// Act
airport.takeOff(plane2);
actual = airport.isPlaneInAirport(plane2);

// Assert 
result = assertEquals(actual, expected);
console.log(`Test 4: Checks if the plane has taken off from the airport => true is: ${result}`);

// Test 5 - Prevent planes from taking off and landing if it does not exist in the airport
console.log(`============================`);

// Arrange
expected = true;

// Act
airport.takeOff(plane1);
airport.landPlane(plane1);
actual = airport.isPlaneInAirport(plane1);

// Assert
result = assertEquals(actual, expected);
console.log(`Test 5: Checks if the plane is in the airport => true is: ${result}`);

// Test 6 - Prevent planes from taking off when the weather is stormy
console.log(`============================`);

// Arrange
expected = false;
airport.weather = "Stormy";

// Act
airport.takeOff(plane1);
actual = airport.checkWeather();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 6: Prevent planes from taking off when the weather is stormy => true is: ${result}`);
console.log(airport.planeList);