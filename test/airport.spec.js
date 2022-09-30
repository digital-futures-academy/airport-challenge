const { Airport } = require("../src/airport");
const { Plane } = require("../src/plane");
const { assertEquals } = require("../testing-framework");

let expected, actual, result;

console.log(`Test 1a: landPlane() adds a plane to landedPlanes[]`)

//Arrange
let airport = new Airport();
let plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.landedPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1a: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 1b: landPlane() adds a specific plane to landedPlanes[]`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = plane;

//Act
airport.landPlane(plane);
actual = airport.landedPlanes[0];

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1b: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 2a: Airport object has a capacity with a default value of 0`)

//Arrange
airport = new Airport();
expected = 0;

//Act
actual = airport.capacity;

//Assert 
result = assertEquals(expected, actual);
console.log(`Test 2a: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 2b: Airport capacity may be altered by passing an argument to the constructor`)

//Arrange
expected = 1;

//Act
airport = new Airport(1);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2b: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 3a: airport has a method called isFull() that returns true when the number of planes landed meets or exceeds the capacity`)

//Arrange
airport = new Airport(3);
let plane1 = new Plane();
let plane2 = new Plane();
let plane3 = new Plane();
expected = true;

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3a: ${result}`);

//Clean-up
airport = undefined;
plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 3b: airport prevents landing if it is full`)

//Arrange
airport = new Airport(3);
plane1 = new Plane();
plane2 = new Plane();
plane3 = new Plane();
let plane4 = new Plane();
expected = 3;

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
actual = airport.landedPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3b: ${result}`);

//Clean-up
airport = undefined;
plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 4a: airport has a takeOff() method which removes a plane from its list of landed planes`)

//Arrange
airport = new Airport(1);
plane = new Plane();
airport.landPlane(plane);
expected = 0;

//Act
airport.takeOff(plane);
actual = airport.landedPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4a: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 4b: takeOff() method removes a specific plane from its list of landed planes`)

//Arrange
airport = new Airport(2);
plane1 = new Plane();
plane2 = new Plane();
airport.landPlane(plane1);
airport.landPlane(plane2);
expected = plane2;

//Act
airport.takeOff(plane1);
actual = airport.landedPlanes[0];
//Assert
result = assertEquals(expected, actual);
console.log(`Test 4a: ${result}`);

//Clean-up
airport = undefined;
plane1 = undefined;
plane2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 4c: airport has isLanded method that returns true if the specific plane is in the list of landed planes`)

//Arrange
airport = new Airport(1);
plane = new Plane();
expected = true;

//Act
airport.landPlane(plane);
actual = airport.isLanded(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4c: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 5c: Airports update the landed variable of a plane when it lands`);

//Arrange
airport = new Airport(1);
plane = new Plane();
expected = true;

//Act
airport.landPlane(plane);
actual = plane.isLanded();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5c: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;