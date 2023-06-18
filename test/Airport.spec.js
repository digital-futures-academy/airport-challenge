const Airport = require('../src/Airport.js');
const { assertEquals } = require('./test-framework');
const Plane = require('../src/Plane.js');
const Weather = require('../src/Weather.js');

let expected, actual, result;

console.log('Airport Tests');
console.log('================================================');

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
console.log(`Test 2: OverrideCapacity function returns an error if the input is null: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

console.log('Test 3');
console.log('================================================');
console.log('');

console.log('Check that the OverrideCapacity function returns an error if the input is a string.');

// Arrange
airport = new Airport();
expected = Error('Please enter a number');

// Act
actual = airport.overrideCapacity('string');
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 3: OverrideCapacity function returns an error if the input is a string: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
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
console.log(`Test 1: Check that planes cannot land when the airportCapacity is full and return an error: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
plane = undefined;
actual = undefined;
expected = undefined;
result = undefined;

console.log('User Story 4');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('After removing a plane from the airport planes list check that the array has decreased in length by 1.');

// Arrange
airport = new Airport();
plane1 = { id: '0001' };
plane2 = { id: '0002' };
airport.airportPlanes = [plane1, plane2];
expected = 1;

// Act
airport.takeoffPlane(plane1); 
actual = airport.airportPlanes.length;

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: Check that removing a plane from the airport planes list decreases the array length by 1: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
plane1 = undefined;
plane2 = undefined;
airport.airportPlanes = undefined;
actual = undefined;
expected = undefined;
result = undefined;

console.log('Test 2');
console.log('================================================');
console.log('');

console.log('Test that plane passed to takeoffPlane is actually removed from the airportPlanes array.');

// Arrange
airport = new Airport();
plane1 = { id: '0001' };
plane2 = { id: '0002' };
plane3 = { id: '0003' };
airport.airportPlanes = [plane1, plane2, plane3];
expected = [{ id: '0002' }, { id: '0003' }];

// Act
actual = airport.takeoffPlane(plane1);
actual = airport.airportPlanes;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 2: Check that the plane passed to takeoffPlane is actually removed from the airportPlanes array: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
actual = undefined;
expected = undefined;
result = undefined;

console.log('Test 3');
console.log('================================================');
console.log('');

console.log('Removing planes that are not in the airportPlanes array returns an error.');

// Arrange
airport = new Airport();
plane1 = { id: '0001' };
plane2 = { id: '0002' };
plane3 = { id: '0003' };
airport.airportPlanes = [plane1, plane2];
expected = Error('This plane is not at the airport');

// Act
actual = airport.takeoffPlane(plane3);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 3: Check that removing planes that are not in the airportPlanes array returns an error: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
actual = undefined;
expected = undefined;
result = undefined;

console.log('Test 4');
console.log('================================================');
console.log('');

console.log('Prevent removing null from the list.');

// Arrange
airport = new Airport();
plane = null;
expected = Error('This plane is not at the airport');

// Act
actual = airport.takeoffPlane(plane);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 4: Check that null is not able to be removed numbers from the list: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
airport = undefined;
plane = undefined;
actual = undefined;
expected = undefined;
result = undefined;


console.log('User Story 5');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('Check that planes are unable to takeoff when the weather is "Stormy".')

// Arrange
airport = new Airport();
plane = { id: '0001' };
airport.landPlane(plane);
airport.setWeather('Stormy');
expected = Error('There is a storm, planes are not permitted for take off or land.');

// Act
actual = airport.takeoffPlane(plane);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: Check that planes are unable to takeoff when the weather is "Stormy": ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
airport = undefined;
plane = undefined;
actual = undefined;
expected = undefined;
result = undefined;

console.log('User Story 6');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('Check that planes are unable to land when the weather is "Stormy".');

// Arrange
airport = new Airport();
airport.setWeather('Stormy');
plane = { id: '0001' };
expected = Error('There is a storm, planes are not permitted for take off or land.');

// Act
actual = airport.landPlane(plane);
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 3: Check that planes are unable to land when the weather is "Stormy": ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
airport = undefined;
plane = undefined;
actual = undefined;
expected = undefined;
result = undefined;