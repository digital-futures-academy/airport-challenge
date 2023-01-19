const { assertEquals } = require(`./testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);
const Weather = require("../src/Weather");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - landPlane() should only add Plane instances to increase the number of planes in the Airport.
//Arrange
airport = new Airport(new Weather());
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 1: Land Plane in an Airport: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 1

// Test 2 - Only instances of Plane can be added to the array of planes in the Airport.
//Arrange
airport = new Airport(new Weather());
plane = "new Plane";
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 2: Try to land a string in an Airport: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 2

// Test 3 - Try and land falsy values in the Airport
//Arrange
airport = new Airport(new Weather());
plane = null;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 3: Try to land falsy value in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 3

// Test 4 - Check the default capacity of Planes in an Airport
//Arrange
airport = new Airport(new Weather());
expected = 3;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 4: Expected capacity of planes in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 4

// Test 5 - Setting up deafault capacity when instantiating an Airport
//Arrange
airport = new Airport(new Weather());
expected = 20;

//Act
airport.setCapacity(20);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 5: Overridden capacity of Planes in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);

// End of Test 5

// Test 6
//Arrange
airport = new Airport(new Weather(), "30");
expected = 3;

//Act
actual = airport.capacity;
//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 6: Overridden wrong type of capacity of Planes in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 6

// Test 7 - Check setCapacity() to set the capacity of the Airport after initialization.

//Arrange
airport = new Airport(new Weather());
expected = 3;

//Act
airport.setCapacity(`20`);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 7: Change capacity of Airport using setCapacity(): ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 7

// Test 8 - Check isAirportFull() logic is working by comparing capacity and planesInAirport.length.
//Arrange
airport = new Airport(new Weather());
plane = new Plane();
plane1 = new Plane();
plane2 = new Plane();
expected = true;

//Act
airport.landPlane(plane);
airport.landPlane(plane1);
airport.landPlane(plane2);
actual = airport.isAirportFull();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 8: Is Airport full: ${result ? `Passed` : `Failed`}`);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
plane1 = null;
plane2 = null;
console.log(`===============================================`);
// End  of Test 8

// Test 9 - Take off Plane should reduce the length of planesInAirport
//Arrange
airport = new Airport(new Weather());
plane1 = new Plane(1);
plane2 = new Plane(2);
plane3 = new Plane(3);
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
expected = 2;

//Act
airport.takeOffPlane(plane2.getID());
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 9: Did plane take off: ${result ? `Passed` : `Failed`}`);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
console.log(`===============================================`);
// End of Test 9

// Test 10 - Check if Plane exists in Airport
//Arrange
airport = new Airport(new Weather());
plane1 = new Plane(1);
plane2 = new Plane(2);
expected = true;

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);
actual = airport.doesPlaneExist(plane1);
//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 10: Does plane exits in Airport: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane1 = null;
plane2 = null;
console.log(`===============================================`);
// End of Test 10

// Test 11 - Take off non-existent Plane
//Arrange
airport = new Airport(new Weather());
airport2 = new Airport(new Weather());
plane1 = new Plane(1);
expected = `Plane does not exist in this airport.`;

//Act
actual = airport2.takeOffPlane(plane1.getID());

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 11: Non - existent plane take off: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
airport2 = null;
plane1 = null;

console.log(`===============================================`);
// End of Test 11

// Test 12 - Landing a plane that already exists
//Arrange
airport = new Airport(new Weather());
plane1 = new Plane(1);
expected = `Plane already exists in this airport.`;

//Act
airport.landPlane(plane1);
actual = airport.landPlane(plane1);

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 12: Existing plane take off: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane1 = null;

console.log(`===============================================`);
// End of Test 12

// Test 13 - Check weather
//Arrange
airport = new Airport(new Weather("Stormy"));
expected1 = `Sunny`;
expected2 = `Stormy`;

//Act
actual = airport.airportWeather.defaultWeather;

//Assert
result = assertEquals(expected1, actual) || assertEquals(expected2, actual);
console.log(`Test 13: Valid weather: ${result ? `Passed` : `Failed`}`);

//Clear up
expected = undefined;
expected2 = undefined;
actual = undefined;
result = undefined;
airport = null;
console.log(`===============================================`);
// End of Test 13

// Test 14 - Land plane in stormy weather
//Arrange
airport = new Airport(new Weather("Stormy"));
plane = new Plane(1);
expected = `Stormy Weather, unable to land!`;

//Act
actual = airport.landPlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 14: Tried to land plane in STORMY weather: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 14

// Test 15 - Land plane with random weather
//Arrange
airport = new Airport(new Weather());
plane = new Plane(1);
expected = `Stormy Weather, unable to land!`;
expected1 = 1;

//Act
airport.airportWeather.getRandomWeather();
actual = airport.landPlane(plane);
actual1 = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual) || assertEquals(expected1, actual1);
console.log(
  `Test 15: Tried to land plane in RANDOM weather: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
actual1 = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 15

// Test 15 - Take off plane with random weather
//Arrange
airport = new Airport(new Weather());
plane = new Plane(1);
expected = `Stormy Weather, unable to take off!`;
expected1 = 0;

//Act
airport.airportWeather.getRandomWeather();
actual = airport.landPlane(plane);
takeOff = airport.takeOffPlane(plane.getID());
actual1 = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual) || assertEquals(expected1, actual1);
console.log(
  `Test 16: Tried to take off in RANDOM weather: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 15
