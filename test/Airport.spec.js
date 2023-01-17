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
plane = 'something'
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