const Airport = require('../src/Airport.js');
const { assertEquals } = require('./test-framework');

let expected, actual, result;

console.log('User Story 1');
console.log('================================================');
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

console.log('User Story 2');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('After changing the capacity check that the capacity has changed to the correct number.');

// Arrange
airport = new Airport();
expected = 10;

// Act
actual = airport.overrideCapacity(10);
type = (typeof actual)
console.log(type)

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: airport capacity changed from 5 to 10: ${result}`);
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

console.log('Check that the OverrideCapacity function returns an error if the input is null.');

// Arrange
airport = new Airport();
expected = Error('Please enter a number');

// Act
actual = airport.overrideCapacity(null);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 2: OverrideCapacity function returns an error if the input is null.: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
actual = undefined;
expected = undefined;
result = undefined;

console.log('User Story 3');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('Check that planes cannot land when the airportCapacity is full and return an error.');

// Arrange
airport = new Airport();
plane = { id: '0001' };
airport.airportPlanes.length = 6;
expected = Error('Airport is full!');

// Act
actual = airport.landPlane(plane);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: Check that planes cannot land when the airportCapacity is full and return an error.: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
plane = undefined;
actual = undefined;
expected = undefined;
result = undefined;
