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
plane = 'easyJet';
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

// Test 2: The airport has a default capacity of 3.
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
console.log(`Test 2: Airport has a default capacity of 3: ${result}`)

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
airport.landPlane(plane5);
airport.landPlane(plane6);
expected = true;

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3: The airport is not at its default capacity: ${result}`)

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;
plane = null;

//Test 4: The airport capacity can be overridden when appropriate. 
console.log(`=============================`)
console.log(`Test 4: The airport capacity can be overridden when appropriate.`)

//Arrange 
airport = new Airport(1);
expected = 1;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4: The airport capacity can be overridden when appropriate: ${result}`)


//Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

//Test 5: The airport prevents landing when the airport capacity is full.
console.log(`===========================`)
console.log(`Test 5: The airport prevents landing when the airport capacity is full.`)

//Arrange
airport = new Airport();
let plane11 = new Plane();
let plane12 = new Plane();
let plane13 = new Plane();
let plane14 = new Plane();
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
expected = true;
//Act

actual = airport.isFull();

//Assert
result = assertEquals(expected, actual); 
console.log(`Test 5: The airport prevents landing when the airport capacity is full. : ${result}`)

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

//Test 6: The airport can confirm that a plane is not in the airportPlanes array 
console.log(`=============================`)
console.log(`Test 6: The airport can confirm that a plane is not in the airportPlanes array using the TakeOff method.`)

//Arrange  
airport = new Airport();
plane30 = new Plane();
plane31 = new Plane();
expected = "This plane is not at the airport"

//Act
airport.landPlane(plane30);
actual = airport.TakeOff(plane31)

//Assert
result = assertEquals(expected, actual);
console.log(`Test 6: The airport can confirm that a plane is not in the airportPlanes array using the TakeOff method: ${result}`)

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

//Test 7: The airport does not allow planes to takeOff that are not in the airportPlanes array.
console.log(`===============================`)
console.log(`Test 7: The airport does not allow planes to execute the takeOff method that are not included in the airportPlanes array.`)

//Arrange 
airport = new Airport();
plane1 = new Plane();
expected = 1;


//Act 
airport.TakeOff(plane1);
actual = airport.airportPlanes.length

//Assert
result = assertEquals(expected, actual);
console.log(`Test 7: The airport does not allow planes to execute the takeOff method that are not included in the airportPlanes array: ${result}`)

//Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

//Test 8: The airport does not allow planes to land which have already landed.
console.log(`================================`)
console.log(`Test 8: The airport does not allow planes to land which have already landed.`)

//Arrange
airport = new Airport();
plane1 = new Plane();
airport.landPlane(plane1);
expected = 1;

//Act
airport.landPlane(plane1);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 8: The airport does not allow planes to land which have already landed. ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 