const { assertEquals } = require('./testingFramework');
const airport = require('../src/airport');
let actualOutput, expectedOutput, result;
const plane = { id: 'I007' };

//User story 4
// Test: Instructing the airport to let a plane take off and confirming it is no longer in the airport
console.log('--------User Story 4--------');
console.log('');
console.log('Test 1: Instructing the airport to let a plane take off and confirming it is no longer in the airport');

// Arrange
airport.listOfPlanes = [plane];
expectedOutput = 'Plane take-off confirmed';

// Act
actualOutput = airport.takeOff(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 1: Plane take-off confirmed: ${result}`);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
console.log('');


// Test 2: Checking the airport is empty and no planes to takeoff
console.log('Test 2: Instructing the airport to let a plane take off from an empty airport');

// Arrange
expectedOutput = 'Plane is not at the airport, cannot take off';

// Act
actualOutput = airport.takeOff(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 2: Checking the airport is empty and no planes to takeoff: ${result}`);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//Taking off a plane from an airport with multiple planes and checking correct plane is taken off
console.log('Test 3: Taking off a plane from an airport with multiple planes and checking correct plane is taken off');

// Arrange
const plane1 = { id: 'JB007' };
const plane2 = { id: 'JB001' };
const plane3 = { id: 'JB003' };
airport.listOfPlanes = [plane1, plane2, plane3];
expectedOutput = [plane1, plane3];

// Act
airport.takeOff(plane2);
actualOutput = airport.listOfPlanes;

// Assert
result = assertEquals(JSON.stringify(actualOutput), JSON.stringify(expectedOutput));
console.log('Expected Remaining Planes: ', expectedOutput);
console.log('Actual Remaining Planes: ', actualOutput);
console.log(`Test 3: Taking off a plane from an airport with multiple planes and checking correct plane is taken off : ${result}`);
console.log(`Test: Correct plane is taken off: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//cleanup

actualOutput = undefined;
expectedOutput = undefined;
result = undefined;