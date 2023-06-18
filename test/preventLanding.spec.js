const { assertEquals } = require('./testingFramework');
const airport = require('../src/airport');
let actualOutput, expectedOutput, result;
const plane1 = { id: '9A06' };
const plane2 = { id: '3A05' };

// Test 1: Prevent Landing When the Airport is Full
console.log('--------User Story 3--------');
console.log('');
console.log('Test 1: Prevent Landing When the Airport is Full');

// Arrange
expectedOutput = false;

// Act
airport.landPlane(plane1);
actualOutput = airport.isFull();

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test: Prevent landing when airport is full: ${result}`);
console.log(`Test: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//Test 2: Prevent Landing When two planes are landing concurrently
console.log('Test 2: Prevent Landing When two planes are landing concurrently');

// Arrange
airport.capacity = 1;
expectedOutput = true;

// Act
airport.landPlane(plane2);
actualOutput = airport.isFull();

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test: Prevent Landing When two planes are landing concurrently: ${result}`);
console.log(`Test: ${result ? 'PASS' : 'FAIL'}`);
console.log('');


//cleanup

actualOutput = undefined;
expectedOutput = undefined;
result = undefined;