const { assertEquals } = require('../testing-framework');
const Airport = require('../src/airport');

let expected;
let actual;
let result;
let airport;
let plane;

//Test 1 - is a plane landed at the airport

console.log(`====================================================`);
console.log(`Test 1 - Check if plane is added in planesAtAirport`);

// Arrange 
airport = new Airport(1);

plane = { id: `british airways`, };
expected = true;

// Act
airport.landPlane(plane);
actual = airport.planesAtAirport.includes(plane);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 1: plane added in planesAtAirport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 2 - test that an airport object has a default capacity`)

//Arrange
expected = 0;

//Act
airport = new Airport();
actual = airport.getCapacity();

//Assert
result = assertEquals(actual, expected);
console.log(` Test 2: Default capacity is set to 0: ${result}`);

//Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 3 - Test that setCapacity changes when setCapacity is called.`);

// Arrange 
airport = new Airport();
expected = 10;

// Act
airport.setCapacity(10);
actual = airport.getCapacity();

// Assert
result = assertEquals(actual, expected);
console.log(` Test 3: Default capacity has changed : ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 4 - check if plane is not added to planesAtAirport array when capacity is full`);

// Arrange 
airport = new Airport(3);

plane = { id: `british airways` };
const plane5 = { id: `kata airways` };
const plane6 = { id: `KLM airways` };
const plane7 = { id: `Zimbabwe airways` };
expected = "airport is full";


// Act
airport.landPlane(plane5);
airport.landPlane(plane6);
airport.landPlane(plane7);

actual = airport.landPlane(plane);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 4: plane not added to planesAtAirport array: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 5 - check if plane is added to planesAtAirport array when capacity is not full`);

// Arrange 
airport = new Airport(10);

plane = { id: `british airways` };
const plane2 = { id: `kata airways` };
const plane3 = { id: `KLM airways` };
const plane4 = { id: `Zimbabwe airways` };

expected = "the plane has landed";


// Act
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);

actual = airport.landPlane(plane);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 5: plane added to planesAtAirport array: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 6 - let a plane take off and confirm that it is no longer in the airport`);

// Arrange 
airport = new Airport(10);

plane = { id: `british airways` };
const plane20 = { id: `kata airways` };
const plane21 = { id: `KLM airways` };
const plane22 = { id: `Zimbabwe airways` };
expected = "the plane has taken off";

airport.landPlane(plane);
airport.landPlane(plane20);
airport.landPlane(plane21);
airport.landPlane(plane22);

// Act

actual = airport.takeOffPlane(plane22);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 6: plane removed from planesAtAirport array: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 7 - check if plane is in the planesAtAirport array`);

// Arrange 
airport = new Airport(7);

plane = { id: `british airways` };
const plane200 = { id: `kata airways` };
const plane201 = { id: `KLM airways` };
const plane202 = { id: `Zimbabwe airways` };

expected = false;

airport.landPlane(plane);
airport.landPlane(plane200);
airport.landPlane(plane201);
airport.landPlane(plane202);

// Act

actual = airport.isPlaneAtAirport(plane2);
// Assert
result = assertEquals(actual, expected);
console.log(` Test 7: plane not in planesAtAirport array: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 8 - prevent planes from taking of which are not in the airport`);

// Arrange 
airport = new Airport(10);

plane = { id: `british airways` };
const plane26 = { id: `kata airways` };
const plane27 = { id: `KLM airways` };
const plane28 = { id: `Zimbabwe airways` };
expected = "cannot take off";

airport.landPlane(plane);
airport.landPlane(plane26);
airport.landPlane(plane27);
airport.landPlane(plane28);

// Act

actual = airport.takeOffPlane(plane200);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 8: cannot takeOff plane not in the planesAtAirport array: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 9 - prevent landing a plane that's already landed`);

// Arrange 
airport = new Airport(10);

plane = { id: `british airways` };
const plane11 = { id: `kata airways` };
const plane12 = { id: `KLM airways` };
const plane13 = { id: `Zimbabwe airways` };
expected = "cannot land plane already in the airport";

airport.landPlane(plane);
airport.landPlane(plane11);
airport.landPlane(plane12);
airport.landPlane(plane13);

// Act

actual = airport.landPlane(plane13);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 9: plane already in the planesAtAirport array: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

