const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport.js');

let expected, actual, result;

console.log('Test 1');
console.log('================================================');
console.log('');

console.log('After adding a plane to the airport planes list check that the array has increased in length by 1.');

// Arrange
let airport = new Airport();
plane = { id: '0001' };
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: 1 plane added to the airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
actual = undefined;
expected = undefined;
result = undefined;
plane = undefined;

console.log('Test 2');
console.log('================================================');
console.log('');

console.log('Test that the specific plane passed to addPlane is actually added to the airportPlanes array.');

// Arrange
airport = new Airport();
plane = { id: '0001' };
expected = [{ id: '0001' }];

// Act
airport.landPlane(plane);
actual = airport.airportPlanes;
actual = JSON.stringify(airport.airportPlanes);
expected = JSON.stringify(expected);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: Check that the right plane is added to the airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
actual = undefined;
expected = undefined;
result = undefined;
plane = undefined;

console.log('Test 3');
console.log('================================================');
console.log('');

console.log('Prevent adding a plane to the airportPlanes array if it is already there.');

// Arrange
airport = new Airport();
let plane1 = { id: '0001' };
let plane2 = { id: '0002' };
expected = [{ id: '0001' }, { id: '0002' }];

// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane1);
actual = JSON.stringify(airport.airportPlanes);
expected = JSON.stringify(expected);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: Check that a plane cannot be added to the airportPlanes list if it is already there: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
actual = undefined;
expected = undefined;
result = undefined;
plane1 = undefined;
plane2 = undefined;

console.log('Test 4');
console.log('================================================');
console.log('');

console.log('Prevent adding numbers to the list.');

// Arrange
airport = new Airport();
plane = 1;
expected = undefined;

// Act
actual = airport.landPlane(plane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 4: Check that a number is not added to the airportPlanes list: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
result = undefined;
plane = undefined;

console.log('Test 5');
console.log('================================================');
console.log('');

console.log('Prevent adding null to the list.');

// Arrange
airport = new Airport();
plane = null;
expected = undefined;

// Act
actual = airport.landPlane(plane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 5: Check that null is not added to the airportPlanes list: ${result}`);
console.log(`Test 5: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
result = undefined;
plane = undefined;