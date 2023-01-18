const { assertEquals } = require('../testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');



let expected;
let actual;
let result;
let airport;
let plane;
let weather;

// Test 2 - planesAtAirport length in Airport increases to 1 when landPlane is called on an empty airport with instance of Plane
console.log(`=======================================`);
console.log(`Test 2 - Plane can be landed in airport with plane is instance of Plane`)

// Arrange
airport = new Airport();
plane = new Plane(`Test1 ID`);
expected = 1;

// Act
airport.landPlane(plane, `sunny`);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Plane landed in the airport: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 3 - landPlane should only allow plane instances to be landed in the airport

console.log(`=======================================`);
console.log(`Test 3 - Only plane instances can be landed in the airport`)

// Arrange
airport = new Airport();
plane = 'something';
expected = 0;

// Act
airport.landPlane(plane, `sunny`);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3: Only plane instances land in the airport: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 4 - Edge Case: Falsy value planes should not be added to the airport

console.log(`=======================================`);
console.log(`Test 4 - Falsy value planes should not be added to the airport`)

// Arrange
airport = new Airport();
plane = undefined; // returns the same for null
expected = 0;

// Act
airport.landPlane(plane, `sunny`);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 4: Falsy value planes have not been added to the airport: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 5 - airportCapacity has a default capacity of 10

console.log(`=======================================`);
console.log(`Test 5 - aiportCapacity has a default capacity of 10`)

// Arrange
airport = new Airport();
expected = 10;

// Act
actual = airport.airportCapacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 5: airport has a default capacity of 10: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 6 - airportCapacity can be overridden when new Airport() is created.

console.log(`=======================================`);
console.log(`Test 6 - aiportCapacity can be overridden when new airport is created`)

// Arrange
airport = new Airport(15);
expected = 15;

// Act
actual = airport.airportCapacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 6: aiportCapacity is overridden when new airport created: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 7 - airportCapacity can be increased after airport creation

console.log(`=======================================`);
console.log(`Test 7 - aiportCapacity can be increased using increaseCapacity after airport creation`)

// Arrange
airport = new Airport(15);
expected = 16;

// Act
airport.increaseCapacity(1);
actual = airport.airportCapacity;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 7: aiportCapacity can be increased after airport creation: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 8 - airportCapacity can be decreased after airport creation

console.log(`=======================================`);
console.log(`Test 8 - aiportCapacity can be decreased using decreaseCapacity after airport creation`)

// Arrange
airport = new Airport(15);
expected = 13;

// Act
airport.decreaseCapacity(2);
actual = airport.airportCapacity;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 8: aiportCapacity can be decreased after airport creation: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 9 - check that airportCapacity is full using isFull

console.log(`=======================================`);
console.log(`Test 9 - check aiportCapacity is full using isFull`)

// Arrange
airport = new Airport(1);
plane = new Plane(`Test1 ID`);
expected = true;

// Act
airport.landPlane(plane, `sunny`);
actual = airport.isFull();


// Assert
result = assertEquals(expected, actual);
console.log(`Test 9: aiportCapacity is full: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 10 - Check that airportCapacity is not full using isFull

console.log(`=======================================`);
console.log(`Test 10 - check aiportCapacity is not full using isFull`)

// Arrange
airport = new Airport(1);
expected = false;

// Act
actual = airport.isFull();


// Assert
result = assertEquals(expected, actual);
console.log(`Test 10: aiportCapacity is not full: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 11 - When airportCapacity is full, a plane cannot land

console.log(`=======================================`);
console.log(`Test 11 - When airportCapacity is full, a plane cannot land`)

// Arrange
airport = new Airport(1);
plane = new Plane(`Test1 ID`);
plane2 = new Plane(`Test2 ID`);
expected = 1;
airport.landPlane(plane, `sunny`); // this plane can land 

// Act
airport.landPlane(plane2, `sunny`); // this plane cannot as airport will now be at full capacity
actual = airport.planesAtAirport.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 11: aiportCapacity is full, plane cannot land: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 12 - planesAtAirport length decreases by 1 when plane is identified and removed from an airport

console.log(`=======================================`);
console.log(`Test 12 - planesAtAirport length decreases by 1 when plane is removed from airport`)

// Arrange
airport = new Airport();
plane = new Plane(`Test1 ID`);
airport.landPlane(plane, `sunny`);
expected = airport.planesAtAirport.length - 1;

// Act
airport.planeTakeOff(plane, `sunny`);
actual = airport.planesAtAirport.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 12 - planesAtAirport length decreases when plane is removed: ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 13 - Check that the plane has left the airport after planeTakeOff 

console.log(`=======================================`);
console.log(`Test 13 - Check that the plane has left the airport after planeTakeOff`)

// Arrange
airport = new Airport();
plane = new Plane(`Test1 ID`);
airport.landPlane(plane);
airport.planeTakeOff(plane, `sunny`);
expected = false;

// Act
actual = airport.isPlaneAtAirport(`Test1 ID`);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 13 - confirm the plane has left the airport- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 14 - Check plane exists in planesAtAirport

console.log(`=======================================`);
console.log(`Test 14 - Check plane exists in planesAtAirport`)

// Arrange
airport = new Airport();
plane = new Plane(`Test1 ID`);
airport.landPlane(plane, `sunny`);
expected = true;

// Act
actual = airport.isPlaneAtAirport(`Test1 ID`);


// Assert
result = assertEquals(expected, actual);
console.log(`Test 14 - plane exists at airport- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 15 - Check plane does not exist in planesAtAirport

console.log(`=======================================`);
console.log(`Test 15 - Check plane does not exist in planesAtAirport`)

// Arrange
airport = new Airport();
plane = new Plane(`Test2 ID`);
expected = false;

// Act
actual = airport.isPlaneAtAirport(`Test2 ID`);


// Assert
result = assertEquals(expected, actual);
console.log(`Test 15 - plane does not exist at airport- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 16 - Check plane does not take off when not at the airport

console.log(`=======================================`);
console.log(`Test 16 - Check plane does not take off when not at the airport`)

// Arrange
airport = new Airport();
plane = new Plane(`Test1 ID`);
expected = 0;

// Act
airport.isPlaneAtAirport(`Test1 ID`)
airport.planeTakeOff(plane, `sunny`);
actual = airport.planesAtAirport.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 16 - plane does not take off when not at the airport- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 17 - Check plane does not land if already in the airport

console.log(`=======================================`);
console.log(`Test 17 - Check plane does not land if already in the airport`)

// Arrange
airport = new Airport();
plane = new Plane(`Test1 ID`);
airport.landPlane(plane, `sunny`);
expected = 1;

// Act
airport.landPlane(plane, `sunny`);
actual = airport.planesAtAirport.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 17 - plane does not land if already in the airport- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


console.log(`=======================================`);

// Test 18 - Plane can not land when weather is stormy, so planesAtAiport length should not decrease

console.log(`=======================================`);
console.log(`Test 18 - Check plane can not land when weather is stormy`)

// Arrange

weather = new Weather();
airport = new Airport();
plane = new Plane(`Test1 ID`);
expected = 0;

// Act
airport.landPlane(plane, `stormy`);
actual = airport.planesAtAirport.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 18 - plane can not land when weather is stormy- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);

// Test 19 - Plane can not take off when weather is stormy, so planesAtAiport length should not decrease

console.log(`=======================================`);
console.log(`Test 19 - Check plane can not take off when weather is stormy`)

// Arrange

weather = new Weather();
airport = new Airport();
plane = new Plane(`Test1 ID`);
airport.landPlane(plane, `sunny`);
expected = 1;

// Act
airport.planeTakeOff(plane, `stormy`)
actual = airport.planesAtAirport.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Test 19 - plane can not take off when weather is not stormy- : ${result}`);

// Clean-up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`=======================================`);





