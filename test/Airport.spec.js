const Airport = require('../src/Airport.js');
const Plane = require('../src/Plane.js')
const { assertEquals } = require('../test-framework.js');

let airport, plane, expected, actual, result;


//TEST 1
console.log('TEST 1: AIRPORT LENGTH INCREASES BY 1 WHEN A NEW PLANE IS ADDED')

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
console.log(`Test 1:Plane landed at airport: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 2
console.log('TEST 2: addPlane should only allow planes that are instances to land ')

//1. Arrange
airport = new Airport();
plane = 'car'
expected = 0;

//2. Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;
// console.log(`${actual}`)


//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 2:Only Plane instances landed at airport: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 3
console.log('TEST 3: Check if Airport has a default capacity ')

//1. Arrange
airport = new Airport();
expected = 5;

//2. Act
actual = airport.airportCapacity;
// console.log(`${actual}`)


//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 3:Airport has a default capacity: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 4
console.log('TEST 4: Override default capacity of airport by creating an airport with a bigger capacity')
//1. Arrange
airport = new Airport(10);
expected = 10;

//2. Act
actual = airport.airportCapacity;
// console.log(`${actual}`)

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 4:Airport has a new capacity: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 5
console.log('TEST 5: Return a boolean(false) when the airport capacity is exceeded')
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
console.log(`Test 5:Airport capacity has been exceeded: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 6
console.log('TEST 6: landPlane does not add plane to airport Plane array when isAirportFull() returns true')
//1. Arrange
airport = new Airport();
plane = new Plane();// a new airport is created with a capacity of 2 
expected = 5

//2. Act
airport.airportPlanes.length = 5;
airport.landPlane(plane);
actual = airport.airportPlanes.length;
console.log(`${actual}`);

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 6:Airport cannot land plane since capacity has been exceeded: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
//TEST 7
console.log('TEST 7: airportPlanes length decreases by 1 when plane takes off')
//1. Arrange
airport = new Airport();
plane = new Plane();
//let planelength = airport.airportPlanes.length;
//console.log(`${planelength}`);
airport.landPlane(plane)
expected = airport.airportPlanes.length - 1

//2. Act
airport.takeOff(plane);
actual = airport.airportPlanes.length;
//console.log(`${actual}`);

//3. Assert
result = assertEquals(actual, expected);
console.log(`Test 7:airportPlanes length decreases by 1 when plane takes off: ${result}`);

//4. CleanUp
airport = null;
plane = null;
result = undefined;
actual = undefined;
expected = undefined;

console.log(`=================================`);
// //TEST 8
// console.log('TEST 7: A string is returned to confirm removal when takeOff is called ')
// //1. Arrange
// airport = new Airport();
// plane = new Plane();
// airport.landPlane(plane)
// expected = 'Plane has taken off from airport'

// //2. Act
// actual = airport.takeOff(plane);
// console.log(`actual);

// //3. Assert
// result = assertEquals(actual, expected);
// console.log(`Test 7: Confirmation received when plane takes off: ${ result }`);

// //4. CleanUp
// airport = null;
// plane = null;
// result = undefined;
// actual = undefined;
// expected = undefined;