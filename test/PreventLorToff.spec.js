const { assertEquals } = require('./testingFramework');
const airport = require('../src/airport');
let actualOutput, expectedOutput, result;

//User story 5
// Test: Preventing the airport to let planes take-off which are not at the airport, or land a plane that's already landed

console.log('--------User Story 5--------');
console.log('');
console.log('Test 1: Preventing the airport to land a plane that\'s already landed');

// Arrange
const plane1 = { id: 'MSD07' };



// Act
if (!airport.isAtAirport(plane1)) {
    expectedOutput = 'Plane landed successfully';
    actualOutput = airport.landPlane(plane1);
} else {
    expectedOutput = 'Plane is already at the airport, cannot land again';
    actualOutput = airport.landPlane(plane1);
}

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 1:Preventing the airport to land a plane that's already landed : ${result}`);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//Test 2: Preventing the airport to takeOff a plane that's not in the airport

console.log('Test 2: Preventing the airport to takeOff a plane that\'s not in the airport');

//Arrange

const plane2 = { id: 'VK009' };

// Act
if (airport.isAtAirport(plane2)) {
    expectedOutput = 'Plane take-off confirmed';
    actualOutput = airport.takeOff(plane2);
} else {
    expectedOutput = 'Plane is not at the airport, cannot take off';
    actualOutput = airport.takeOff(plane2);
}

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 2: Preventing the airport to takeOff a plane that's not in the airport : ${result}`);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//cleanup

actualOutput = undefined;
expectedOutput = undefined;
result = undefined;