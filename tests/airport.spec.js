const { assertEquals } = require('../testing-framework')
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - airportPlanes length increases from empty to 1 when landPlane is called with a Plane.
console.log(`========================================`);
console.log('Test 1 - landPlane adds a Plane to the airport')

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane landed at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 2 - landPlane should only add Plane instances to the airportPlanes list.
console.log(`========================================`);
console.log('Test 2 - landPlane only adds Plane instances to the airportPlanes list')

// Arrange
airport = new Airport();
plane = 'Something';
expected = 0;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Only Plane instances added to airportPlanes list: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 3 - Null value Planes should not be added to the airportPlanes list.
console.log(`========================================`);
console.log('Test 3 - Null value Planes not added.')

// Arrange
airport = new Airport();
plane = null;
expected = 0;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3 - Null value Planes not added to the airportPlanes list: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 4 - Default airportCapacity can be set on Airport
console.log(`========================================`);
console.log('Test 4 - Default capacity can be set')

// Arrange
airport = new Airport();
plane = new Plane
expected = 2;

// Act
actual = airport.airportCapacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4 - Default capacity set: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 5 - Additional Planes cannot land (i.e. be added to airportPlanes list) once capacity is reached.
console.log(`========================================`);
console.log('Test 5 - Additional Planes cannot land once capacity is reached.')

// Arrange
airport = new Airport();
plane = new Plane('Plane1');
plane = new Plane('Plane2');
plane = new Plane('Plane3');
expected = 2;

// Act
airport.landPlane(plane);
airport.landPlane(new Plane('Plane2'));
airport.landPlane(new Plane('Plane3'));
actual = airport.airportCapacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 5 - Additional Planes cannot land once capacity is reached: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 6 - Default capacity can be overridden.
console.log(`========================================`);
console.log('Test 6 - Default capacity can be overridden.')

// Arrange
airport = new Airport();
plane = new Plane('Plane1');
plane = new Plane('Plane2');
plane = new Plane('Plane3');
airport.airportCapacity = 3
expected = 3;

// Act
airport.landPlane(plane);
airport.landPlane(new Plane('Plane2'));
airport.landPlane(new Plane('Plane3'));
actual = airport.airportCapacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 6 - Default capacity can be overridden: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 7 - takeoffPlane from Airport.
console.log(`========================================`);
console.log('Test 7 - takeoffPlane from Airport.')

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = airport.airportPlanes.length - 1;

//Act
airport.takeoffPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 7 - Plane removed from airportPlanes: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 8 - If PlaneId does not exist in the airportPlanes array when takeoffPlane is called, do nothing.
console.log(`========================================`);
console.log('Test 8 - Planes which are not at the airport cannot take off')

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = 1;

//Act
airport.takeoffPlane('Ghost Plane');
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 8 - Planes which are not at the airport cannot take off: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);

// Test 8 - If PlaneId exists in the airportPlanes array when landPlane is called, do nothing.
console.log(`========================================`);
console.log('Test 9 - Planes which are already at the airport cannot land')

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 9 - Planes which are already at the airport cannot land: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`========================================`);
