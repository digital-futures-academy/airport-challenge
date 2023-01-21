const Airport = require('../src/Airport.js');
const Plane = require('../src/Plane.js')
const { assertEquals } = require('../test-framework.js');

let airport, plane, expected, actual, result;

console.log(`=================================`);
//TEST 1a
console.log('Test 1a: airPortPlanes length increases when plane lands at airport')

//1. Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//2. Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;
// console.log(`${actual}`)

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 1a: airPortPlanes length increases when plane lands at airport: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 1b
console.log('TEST 1b: addPlane should only allow planes that are instances to land ')

//1. Arrange
airport = new Airport();
plane = 'car'
expected = 0;

//2. Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;


//3. Assert
result = assertEquals(actual, expected);
console.log(`TEST 1b: addPlane should only allow planes that are instances to land: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 2a
console.log('TEST 2a: Airport has a default capacity ')

//1. Arrange
airport = new Airport();
expected = 5;// this is the capacity assigned to the airport

//2. Act
actual = airport.airportCapacity;
// console.log(`${actual}`)


//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 2a: Airport has a default capacity: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 2b
console.log('TEST 2b: Override default capacity of airport by creating an airport with a bigger capacity')
//1. Arrange
airport = new Airport(10);
expected = 10;

//2. Act
actual = airport.airportCapacity;
// console.log(`${actual}`)

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 2b:Airport has a new capacity: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 3a
console.log(`Test 3a: isAirportFull() returns 'true' when airportCapacity is exceeded.`)
//1. Arrange
airport = new Airport();
plane = new Plane();// a new airport is created with a capacity of 2 
expected = true;

//2. Act
airport.airportPlanes.length = 5;
actual = airport.isAirportFull();
// console.log(`${actual}`)

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 3a: isAirportFull() returns 'true' when airportCapacity is exceeded: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 3b
console.log('TEST 3b: landPlane does not add plane to airportPlane[] when isAirportFull() returns true')
//1. Arrange
airport = new Airport();
plane = new Plane();// a new airport is created with a capacity of 2 
expected = 5

//2. Act
airport.airportPlanes.length = 5;
airport.landPlane(plane);
actual = airport.airportPlanes.length;

//3. Assert
result = assertEquals(actual, expected);
console.log(`TEST 3b: landPlane does not add plane to airportPlane[] when isAirportFull() returns 'true': ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 4a
console.log('TEST 4a: airportPlanes length decreases by 1 when plane takes off')
//1. Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane)
expected = airport.airportPlanes.length - 1

//2. Act
airport.takeOff(plane);
actual = airport.airportPlanes.length;

//3. Assert
result = assertEquals(actual, expected);
console.log(`TEST 4a: airportPlanes length decreases by 1 when plane takes off: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 4b
console.log('TEST 4b: A string is returned to confirm removal when takeOff is called on instance of plane ')
//1. Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane)// a new instance of plane is created and landed at airport
expected = 'Plane has taken off from the airport.'

//2. Act
actual = airport.takeOff(plane);

//3. Assert
result = assertEquals(actual, expected);
console.log(`TEST 4b: A string is returned to confirm removal when takeOff is called on instance of plane: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 9
console.log('TEST 5a: planeAtAirport() returns true if plane is at airport')
//1. Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//2. Act
airport.landPlane(plane)
actual = airport.planeAtAirport(plane);

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 5a:planeAtAirport() returns true if plane is at airport: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 10
console.log('TEST 5b: The length of airportPlane does not change when landPlane is called on a plane that is already at the airport')
//1. Arrange
airport = new Airport();
plane = new Plane('Lufthansa');
airport.landPlane(plane);
expected = airport.airportPlanes.length;

//2. Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 5b:The length of airportPlane does not change when landPlane is called on a plane that is already at the airport: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;


console.log(`=================================`);
//TEST 11
console.log('TEST 5c: The length of airportPlane does not change takeOff is called on a plane that is not in the airport')
//1. Arrange
airport = new Airport();
plane = new Plane();
airport.landPlane(plane);
airport.takeOff(plane);
expected = airport.airportPlanes.length;

//2. Act
airport.takeOff(plane);
actual = airport.airportPlanes.length;

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 5c:The length of airportPlane does not change takeOff is called on a plane that is not in the airport: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;