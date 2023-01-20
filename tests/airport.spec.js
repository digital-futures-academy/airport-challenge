const { assertEquals } = require(`./testing-framework.js`);
const Airport = require(`../src/Airport.js`);
const Plane = require("../src/Plane.js");
let expected;
let actual;
let result;
let airport;
let plane;


//Test 1 - airportPlanes array length should increase by 1 when addPlane is called on the empty airport array with a Plane
console.log(`----------------------------------`);
console.log(`Test 1 - addPlane adds a Plane into the airport array`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.addPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: added plane to airport: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);

//Test 2 - addPlanes should only add Plane instances to airportList

console.log(`----------------------------------`);
console.log(`Test 2 - addPlanes should only add Plane instances to airportList`);

//Arrange
airport = new Airport();
plane = `something`;
expected = 0;

//Act
airport.addPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2: only Plane instances added to airport: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`----------------------------------`);



//Test 3 - falsy value planes should not be added

console.log(`----------------------------------`);
console.log(`Test 3 - falsy value planes should not be added`);

//Arrange
airport = new Airport();
plane = null;
expected = 0;

//Act
airport.addPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3 - falsy value planes should not be added: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`----------------------------------`);

//Test 4 - airportPlanes length decreases to 0 when a Plane entry is found

console.log(`----------------------------------`);
console.log(`Test 4 - airportPlanes length decreases to 0 when a Plane entry is found`);

//Arrange
airport = new Airport();
plane = new Plane(`plane1`);
airport.addPlane(plane);
expected = airport.airportPlanes.length - 1;

//Act
airport.removePlane(airport);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4: airportPlanes length decreases to 0 when a Plane entry is found: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);



//Test 5 - testing that setCapacity works

console.log(`----------------------------------`);
console.log(`Test 5 - testing that setCapacity works`);

//Arrange
airport = new Airport();
expected = 3

//Act
console.log(airport.capacity);

actual = airport.capacity

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5 - getting default airportCapacity: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);


//Test 6 - checking setCapacity

console.log(`----------------------------------`);
console.log(`Test 6 - checking setCapacity`);

//Arrange
airport = new Airport();
expected = 4;

//Act
// airport.setCapacity(`4`);

actual = airport.setCapacity(4);


//Assert
result = assertEquals(expected, actual);
console.log(`Test 6 - checking setCapacity: ${result}`);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);

//Test - 7 Edge case testing that airport.capacity is a number

console.log(`----------------------------------`);
console.log(`Test - 7 Edge case testing that airport.capacity is a number`);

//Arrange
airport = new Airport();
expected = `Value not number`;

//Act
// airport.setCapacity(`4`);

actual = airport.setCapacity(`4`);


//Assert
result = assertEquals(expected, actual);
console.log(`Test 7 - checking setCapacity: ${result}`);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);



//Test - 8 preventing 

console.log(`----------------------------------`);
console.log(`Test - 8 Edge case testing that airport.capacity is a number`);

//Arrange
airport = new Airport();
const plane1 = new Plane(1);
const plane2 = new Plane(2);
const plane3 = new Plane(3);

airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);
expected = `Airport is full`;

//Act



actual = airport.addPlane(plane3);


//Assert
result = assertEquals(expected, actual);
console.log(`Test 8 - checking setCapacity: ${result}`);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);


//Test 9 - preventing addPlane from running if plane is already present, return error string

console.log(`----------------------------------`);
console.log(`Test 9 - preventing addPlane from running if plane is already present, return error string`);

//Arrange
airport = new Airport();
plane = new Plane();



//Act
airport.addPlane(plane);
actual = airport.addPlane(plane);

expected = `Plane already landed`;



//Assert
result = assertEquals(expected, actual);
console.log(`Test 9: Checking if plane landing fails ${result}`);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);


//Test 10 - checking if plane is not in airport before removing

console.log(`----------------------------------`);
console.log(`Test 10 - checking if plane is not in airport before removing`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
actual = airport.removePlane();
expected = `Plane not in airport`;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 10 - checking if plane is not in airport before removing ${result}`);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`----------------------------------`);