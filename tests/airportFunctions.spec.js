const { assertEquals } = require('./test-framework');

const { airport } = require('../src/airport')

let actualOutput, expectedOutput, result, input;

//USER STORY 1 TESTS
console.log("USER STORY 1 TESTS");
// Test 1: Plane Lands at airport.
console.log("\nTest 1: Plane Lands at airport.");
console.log("============================================================");

//Arrange
input = { id: 'plane' };
expectedOutput = 1

//Act
airport.landPlane(input);
actualOutput = airport.landedPlanes.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);

//Clean up
expectedOutput = undefined;
actualOutput = undefined;
airport.landedPlanes = [];

// Test 2: Only planes with an ID can land.
console.log("\nTest 2: Only planes with an ID can land");
console.log("============================================================");

//Arrange
input = { notID: 'plane' };
expectedOutput = 0

//Act
airport.landPlane(input);
actualOutput = airport.landedPlanes.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);

//Clean up
expectedOutput = undefined;
actualOutput = undefined;
airport.landedPlanes = [];
input = undefined;

//#############################################################################

//USER STORY 2 TESTS
console.log("\nUSER STORY 2 TESTS");
// Test 1: Airport has maxCapacity increased from 1 to 2.
console.log("\nTest 1: Airport has maxCapacity increased from 1 to 2");
console.log("============================================================");

//Arrange
input = 1  //increasing it by 1
expectedOutput = 2

console.log(airport.maxCapacity);

//Act
airport.increaseAirportCapacity(input)
actualOutput = airport.maxCapacity;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
console.log(airport.maxCapacity);
//Clean up
expectedOutput = undefined;
actualOutput = undefined;
airport.landedPlanes = [];

//#############################################################################

//USER STORY 3 TESTS
console.log("\nUSER STORY 2 TESTS");
// Test 1: Airport has maxCapacity increased from 1 to 2.
console.log("\nTest 1: Airport has maxCapacity increased from 1 to 2");
console.log("============================================================");

//Arrange
input = 1  //increasing it by 1
expectedOutput = 2

//Act
airport.increaseAirportCapacity(input)
actualOutput = airport.maxCapacity;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);

//Clean up
expectedOutput = undefined;
actualOutput = undefined;
airport.landedPlanes = [];
