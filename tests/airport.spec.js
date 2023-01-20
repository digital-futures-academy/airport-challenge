const Airport = require("../src/airport");
const Plane = require("../src/plane");
const Weather = require("../src/weather");
const { assertEquals } = require(`./testing-framework`);

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - landedPlanes length in Airport increases to 1 when landPlane is called on an empty airport with something
console.log(`=======================`);
console.log(`Test 1- landPlane adds a Plane to the airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;


// Act 
airport.landPlane(plane);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: landPlane adds a Plane to the airport: ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test 2 - landedPlanes should only add instances of Plane to landedPlanes
console.log(`=======================`);
console.log(`Test 2- Only instances of Plane should be added to an Airport`);

// Arrange
airport = new Airport();
plane = `something`;
expected = 0;

// Act 
airport.landPlane(plane);
actual = airport.landedPlanes.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Only Plane instances added to airport: ${result}`);


// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test 3 - 
console.log(`=======================`);
console.log(`Test 3- landedPlanes decreases by 1 when a plane is identified and takes off`);

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = airport.landedPlanes.length - 1;

// Act
airport.flyPlane(plane);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3: landedPlanes length decreases by 1 when Plane is found and removed : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test 4 - 
console.log(`=======================`);
console.log(`Test 4- Each airport default capacity should be 10`);

// Arrange
airport = new Airport();
expected = 10;

// Act
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4: Airport capacity is 10 : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test 5 - 
console.log(`=======================`);
console.log(`Test 5- capacity can be changed to another value e.g 15`);

// Arrange
airport = new Airport(15);
expected = 15;

// Act
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 5: Airport capacity is 15 : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test  6- 
console.log(`=======================`);
console.log(`Test 6- We want to see if the airport is full by returning true to isFull() if landedPlanes is equal to capacity`);

// Arrange
airport = new Airport();
for (let i = 0; i < airport.capacity; i++) {
    airport.landPlane(new Plane());
}
airport.isFull = true;
expected = true;

// Act
actual = airport.isFull;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 6: Airport capacity is full : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test  7- 
console.log(`=======================`);
console.log(`Test 7- a plane cannot land when isFull is true`);

// Arrange
airport = new Airport();
for (let i = 0; i < airport.capacity; i++) {
    airport.landPlane(new Plane());
}
plane = new Plane();
expected = false;

// Act
actual = airport.landPlane(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 7: landPlane cannot continue if isFull is true : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test  8- 
console.log(`=======================`);
console.log(`Test 8- testing that we cannot land a plane that is in the airport`);

// Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
expected = false;

// Act
actual = airport.landPlane(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 8: Preventing a plane to land that is already landed : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test  9- 
console.log(`=======================`);
console.log(`Test 9- We cannot let a plane take off that is not at the airport `);

// Arrange
airport = new Airport();
plane = new Plane();
expected = false;

// Act
actual = airport.flyPlane(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 9: Plane does not take off if it does not exist in the airport : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

console.log(`=======================`);
console.log(``);

// Test  10- 
console.log(`=======================`);
console.log(`Test 10- Plane cannot take off if weather is stormy`);

// Arrange
airport = new Airport();
plane = new Plane();
weather = new Weather();
weather.weatherStatus = `stormy`;
expected = false;

// Act
actual = airport.flyPlane(plane, weather);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 10: Plane does not take off if weather is stormy : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
weather = null;

console.log(`=======================`);
console.log(``);

// Test  11- 
console.log(`=======================`);
console.log(`Test 11- Plane cannot land if weather is stormy`);

// Arrange
airport = new Airport();
plane = new Plane();
weather = new Weather();
weather.weatherStatus = `stormy`;
expected = true;

// Act
actual = airport.landPlane(plane);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 11: Plane does not land if weather is stormy : ${result}`);

// Clean up 
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
weather = undefined;

console.log(`=======================`);
console.log(``);