const Airport = require(`../src/Airport`);
const { assertEquals } = require(`../testing-framework.js`);
const Plane = require(`../src/Plane`);
const Weather = require(`../src/Weather`);

console.log(`airport spec - testing for Airport Class`);
console.log(`--------------------------------`);
// Test 1
console.log(`Test 1 - Testing that an Airport can land a Plane.`);

// Arrange
firstAirportWeather = new Weather();
firstAirport = new Airport(firstAirportWeather);
myPlane = new Plane(true);
expected = false;
input = firstAirport.landPlane(myPlane);

// Act
actual = myPlane.checkFlying();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 1: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;

// Test 2
console.log(`Test 2 - Testing that an Airport will not land something that is not an object.`);

// Arrange
firstAirport = new Airport();
myPlane = `Plane`;
expected = `This plane cannot be landed`;

// Act
actual = firstAirport.landPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 2: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 3
console.log(`Test 3 - Testing that an Airport will not land a Plane that has already landed.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane();
expected = `This plane cannot be landed`;

// Act
actual = firstAirport.landPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 3: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 4
console.log(`Test 4 - Testing that an Airport has a default capacity set.`);

// Arrange
firstAirport = new Airport();
expected = 5;

// Act
actual = firstAirport.getCapacity();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 4: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 5
console.log(`Test 5 - Testing that an Airport capacity can be changed.`);

// Arrange
firstAirport = new Airport();
expected = 10;
input = firstAirport.changeCapacity(10);

// Act
actual = firstAirport.getCapacity();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 5: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 6
console.log(`Test 6 - Testing that an Airport capacity can be changed with an edge case.`);

// Arrange
firstAirport = new Airport();
expected = 0;
input = firstAirport.changeCapacity(0);

// Act
actual = firstAirport.getCapacity();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 6: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 7
console.log(`Test 7 - Testing that an Airport capacity can't be changed with a boundary case.`);

// Arrange
firstAirport = new Airport();
expected = `invalid capacity entered`;

// Act
actual = firstAirport.changeCapacity(-1);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 7: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 8a
console.log(`Test 8a - Testing that an Airport capacity can't be changed with something that is not a valid Integer.`);
console.log(`data type: String`)

// Arrange
firstAirport = new Airport();
expected = `invalid capacity entered`;

// Act
actual = firstAirport.changeCapacity(`ten`);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 8a: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 8b
console.log(`Test 8b - Testing that an Airport capacity can't be changed with something that is not a valid Integer.`);
console.log(`data type: undefined`)

// Arrange
firstAirport = new Airport();
expected = `invalid capacity entered`;

// Act
actual = firstAirport.changeCapacity(undefined);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 8b: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 9
console.log(`Test 9 - Testing that an Airport can't land a Plane if it is at capacity.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane(true);
firstAirport.changeCapacity(0);
expected = `This plane cannot be landed`;

// Act
actual = firstAirport.landPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 9: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 10
console.log(`Test 10 - Testing that an Airport can take off a Plane and check it's status.`);

// Arrange
firstAirportWeather = new Weather();
firstAirport = new Airport(firstAirportWeather);
myPlane = new Plane();
firstAirport.addPlaneToAirport(myPlane);
expected = true;
input = firstAirport.takeOffPlane(myPlane);

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 10: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;

// Test 11
console.log(`Test 11 - Testing that an Airport can't take off a Plane and that is already flying.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane(true);
expected = `This plane cannot take off`;

// Act
actual = firstAirport.takeOffPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 11: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 12a
console.log(`Test 12a - Testing that an Airport can't take off a Plane and that isn't currently at the Airport.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane();
expected = false;
input = firstAirport.takeOffPlane(myPlane)

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 12a: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 12b
console.log(`Test 12b - Testing that an Airport can't take off a Plane and that isn't currently at the Airport, when another instance of plane is at the airport.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane();
secondPlane = new Plane();
firstAirport.addPlaneToAirport(secondPlane);
expected = false;
input = firstAirport.takeOffPlane(myPlane);

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 12b: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
secondPlane = undefined;

// Extended Criteria
console.log(`Extended Criteria tests`);
console.log(`--------------------------------`);
// Test 13
console.log(`Test 13 - Testing that an Airport prevents takeoff with stormy weather.`);

// Arrange
myPlane = new Plane();
firstAirportWeather = new Weather();
firstAirportWeather.stormy = true;
firstAirport = new Airport(firstAirportWeather);
firstAirport.addPlaneToAirport(myPlane);
expected = false;
input = firstAirport.takeOffPlane(myPlane)

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 13: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;

// Test 14
console.log(`Test 14 - Testing that an Airport allows takeoff with clear weather.`);

// Arrange
myPlane = new Plane();
firstAirportWeather = new Weather();
firstAirport = new Airport(firstAirportWeather);
firstAirport.addPlaneToAirport(myPlane);
expected = true;
input = firstAirport.takeOffPlane(myPlane)

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 14: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;

// Test 15
console.log(`Test 15 - Testing that an Airport prevents landing with stormy weather.`);

// Arrange
myPlane = new Plane(true);
firstAirportWeather = new Weather();
firstAirportWeather.stormy = true;
firstAirport = new Airport(firstAirportWeather);
expected = true;
input = firstAirport.landPlane(myPlane)

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 15: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;

// Test 16
console.log(`Test 16 - Testing that an Airport allows landing with clear weather.`);

// Arrange
myPlane = new Plane(true);
firstAirportWeather = new Weather();
firstAirport = new Airport(firstAirportWeather);
expected = false;
input = firstAirport.landPlane(myPlane)

// Act
actual = firstAirport.checkPlaneFlying(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 16: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;

// Test 17
console.log(`Test 17 - Testing that landed Planes are at an Airport.`);

// Arrange
myPlane = new Plane(true);
firstAirportWeather = new Weather();
firstAirport = new Airport(firstAirportWeather);
expected = true;
input = firstAirport.landPlane(myPlane)

// Act
actual = firstAirport.checkForPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 16: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;
firstAirportWeather = undefined;