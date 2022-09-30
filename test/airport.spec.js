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
airport.add(plane);
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
airport.add(plane);
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
airport.add(plane1);
airport.add(plane2);
airport.add(plane3);
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