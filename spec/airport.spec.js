const { assertEquals } = require(`../testing.framework`);
const Airport = require(`../src/airport`);
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1:  AirportPlanes length increases to 1 when addPlane is called on an empty Airport with a Plane
console.log(`============================`);
console.log(`Test 1 - addPlane lands a Plane into the Airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Something added to airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2: The airport is at its default capacity of 3.
console.log(`=============================`)
console.log(`Test 2: The airport has a default capacity.`)

//Arrange
airport = new Airport();
let plane1 = new Plane();
let plane2 = new Plane();
let plane3 = new Plane();
let plane4 = new Plane();
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
expected = true;
//Act

actual = airport.isFull();
//Assert
result = assertEquals(expected, actual); 
console.log(`Test 2: Airport is at its default capacity of 3: ${result}`)

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;
plane = null;

//Test 3: The airport is not at its default capacity.
console.log(`=============================`)
console.log(`Test 3: The airport is not at its default capacity.`)

//Arrange 
airport = new Airport();
let plane5 = new Plane();
let plane6= new Plane();
airport.landPlane(plane1);
airport.landPlane(plane2);
expected = false;
//Act
actual = airport.isFull();
//Assert
result = assertEquals(expected, actual);
console.log(`Test 3: The airport is at its default capacity: ${result}`)
//Clean up

