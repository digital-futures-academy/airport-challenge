const { assertEquals } = require('../test-framework');
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`)

let expected, actual, result, airport, plane;

// Test 1 - planesLanded length increases to 1 when an empty airport is told to land a plane
console.log(`==========`);
console.log(`planesLanded length increases to 1 when an airport is told to land a plane`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act 
airport.landPlane(plane);
actual = airport.planesLanded.length;
console.log(actual);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Tell an airport to land a plane: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 2 - Only allow object of type "Plane" to land
console.log(`==========`);
console.log(`Test 2 - Only allow object of type "Plane" to land`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 0;

// Act 
airport.landPlane('notAPlane');
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Only allow object of type "Plane" to land: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 3 - Edge Case - Falsy item is not added
console.log(`==========`);
console.log(`Test 3 - Edge Case - Falsy item is not added`);

// Arrange
airport = new Airport();
plane = null;
expected = 0;

// Act 
airport.landPlane(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3 - Edge Case - Falsy item is not added: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 4 - Does the airport have a default capacity?
console.log(`==========`);
console.log(`Test 4 - Does the airport have a default capacity of 10?`);

// Arrange
airport = new Airport();
expected = 10;

// Act 
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4 - Does the airport have a default capacity of 10?: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 5 - capacity changes to 20 when requested
console.log(`==========`);
console.log(`Test 5 - capacity changes to 20 when requested`);

// Arrange
airport = new Airport();
airport.changeCapacity(20);
expected = 20;

// Act 
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 5 - capacity changes to 20 when requested: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 6 - capacity change is rejected if not type number
console.log(`==========`);
console.log(`Test 6 - capacity change is rejected and remains at default if not type number is passed to changeCapacity`);

// Arrange
airport = new Airport();
airport.changeCapacity(`notANumber`);
expected = 10;

// Act 
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 6 - capacity change is rejected if not type number: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 7 - capacity change is rejected if new capacity is < 0
console.log(`==========`);
console.log(`Test 7 - capacity change is rejected if new capacity is < 0`);

// Arrange
airport = new Airport();
airport.changeCapacity(-1);
expected = 10;

// Act 
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 7 - capacity change is rejected if new capacity is < 0: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 8 - capacity change is rejected if not an integer
console.log(`==========`);
console.log(`Test 8 - capacity change is rejected if not an integer`);

// Arrange
airport = new Airport();
airport.changeCapacity(2.5);
expected = 10;

// Act 
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 8 - capacity change is rejected if not an integer: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 9 - If the number of planes in planesLanded is equal to the capacity the plane cannot land
console.log(`==========`);
console.log(`Test 9 - If the number of planes in planesLanded is equal to the capacity the plane cannot land`);

// Arrange
airport = new Airport();
plane = new Plane();
for (let i = 0; i < 10; i++) {
    airport.landPlane(plane);
}
expected = 10;

// Act
airport.landPlane(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 9 - If the number of planes in planesLanded is equal to the capacity the plane cannot land: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 10 - remove a plane from the planesLanded array
console.log(`==========`);
console.log(`Test 10 - remove a plane from the planesLanded array`);

// Arrange
airport = new Airport();
plane = new Plane(`test1`);
airport.landPlane(plane);
expected = 0;

// Act
airport.takeOff(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 10 - remove a plane from the planesLanded array: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 11 - Only remove a plane that exists in planesLanded
console.log(`==========`);
console.log(`Test 11 - Only remove a plane that exists in planesLanded`);

// Arrange
airport = new Airport();
plane = new Plane(`test1`);
airport.landPlane(plane);
expected = 1;

// Act
airport.takeOff(`plane`); // Passed a string, not a Plane
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 11 - Only remove a plane that exists in planesLanded: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 12 - Confirm that a plane has left the airport
console.log(`==========`);
console.log(`Test 12 - Confirm that a plane has left the airport`);

// Arrange
airport = new Airport();
plane = new Plane(`test1`);
airport.landPlane(plane);
airport.landPlane(new Plane(`test2`));
expected = 1;

// Act
airport.takeOff(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 12 - Confirm that a plane has left the airport: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 13 - don't allow a plane to land if it is already at the airport
console.log(`==========`);
console.log(`Test 13 - don't allow a plane to land if it is already at the airport`);

// Arrange
airport = new Airport();
plane = new Plane(`test1`);
airport.landPlane(plane);
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 13 - don't allow a plane to land if it is already at the airport: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 14 - don't allow a plane to take off if it is not at the airport
console.log(`==========`);
console.log(`Test 14 - don't allow a plane to take off if it is not at the airport`);

// Arrange
airport = new Airport();
plane = new Plane(`test1`);
airport.landPlane(new Plane(`test2`));
expected = 1;

// Act
airport.takeOff(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 14 - don't allow a plane to take off if it is not at the airport: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;