const { assertEquals } = require('./testing-framework');
const Plane = require('../src/plane');
const Airport = require('../src/airport');

let actual, result, expected;

const plane1 = new Plane('ABC');

console.log('Test 1');
console.log('=============================================');
console.log('');

console.log('Airport should be able to land a plane');

// Arrange

const airport = new Airport();
expected = true;

// Act 
airport.land(plane1);
actual = airport.hasPlane(plane1);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: Plane is landed at the airport: ${result}`);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

// Clean up
airport.clearPlanes();
result = undefined;
actual = undefined;


// New Test
console.log('Test 2');
console.log('=============================================');
console.log('');

console.log('Airport should be able to let a plane take off');

// Arrange

airport.land(plane1);
expected = false;

// Act 
airport.takeOff(plane1);
actual = airport.hasPlane(plane1);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: Plane has taken off from the airport: ${result}`);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

airport.clearPlanes();
result = undefined;
actual = undefined;