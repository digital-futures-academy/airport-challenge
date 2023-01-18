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
airport.addPlane(plane);
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
airport.addPlane(plane);
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
expected = 500;

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
console.log('TEST 3: Override default capacity of airport by creating an airport with a bigger capacity')
//1. Arrange
airport = new Airport(1000);
expected = 1000;

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
