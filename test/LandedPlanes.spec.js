const { assertEquals } = require('./testingFramework');
const airport = require('../src/airport');
let actualOutput, expectedOutput, result;

// Test 1: Counting landed planes
console.log('--------Extended Criteria--------');
console.log('');
console.log('Test 1: Counting the number of landed planes at the airport');

// Arrange
const plane1 = { id: 'SP345' };
const plane2 = { id: 'LA955' };
airport.listOfPlanes = []; //Reset the list of planes


// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
actualOutput = airport.countLandedPlanes();
expectedOutput = 2;

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 1: Counting landed planes: ${result}`);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

// Test 2: Landing different planes with the same ID
console.log('Test 2: Landing different planes with the same ID');

// Arrange
const plane3 = { id: 'IR233' };
const plane4 = { id: 'IR233' };
airport.listOfPlanes = [];

// Act
airport.landPlane(plane3);
airport.landPlane(plane4);
actualOutput = airport.countLandedPlanes();
expectedOutput = 2;

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 2: Landing different planes with the same ID: ${result}`);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
console.log('');


// Test 3: Landing plane with undefined id
console.log('Test 3: Landing plane with undefined ID');

// Arrange
const plane5 = { id: undefined };
airport.listOfPlanes = [];

// Act
airport.landPlane(plane5);
actualOutput = airport.countLandedPlanes();
expectedOutput = 1;

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 3: Landing plane with undefined ID: ${result}`);
console.log(`Test 3: ${result ? 'PASS' : 'FAIL'}`);
console.log('');
