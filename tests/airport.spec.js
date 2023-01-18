const Airport = require("../src/airport");
const Plane = require("../src/plane");
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