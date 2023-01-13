const { assertEquals } = require(`./testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - landPlane() should only add Plane instances to increase the number of planes in the Airport.
//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Land Plane in an Airport: ${result}`);

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
airport = new Airport();
plane = "new Plane";
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Try to land a string in an Airport: ${result}`);

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
airport = new Airport();
plane = null;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3: Try to land falsy value in an Airport: ${result}`);

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
airport = new Airport();
expected = 10;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4: Expected capacity of planes in an Airport: ${result}`);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 4

// Test 5
//Arrange
airport = new Airport(20);
expected = 20;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5: Overridden capacity of Planes in an Airport: ${result}`);

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
airport = new Airport("30");
expected = 10;

//Act
actual = airport.capacity;
//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 6: Overridden wrong type of capacity of Planes in an Airport: ${result}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 6
