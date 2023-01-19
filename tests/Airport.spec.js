const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

let expectedOutput;
let input;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()
//USER STORY 1
// Test 1
console.log(`*** Check that only Plane types are able to land at the Airport when planeLands ***`);

// Arrange
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 1;
input = plane1;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`is a plane: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 2
console.log(`***Length of planeAtAirport array at the Airport increases by 1 when planeLands ***`);


// Arrange
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 1;
input = plane1;
actualOutput, result;

// Act
airport1.planeLands(input)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`plane landed: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;


// Test 3
console.log(`*** Check that edge cases such as 'null' as a type are unable to land at the airport***`);

// Arrange
airport1 = new Airport()
expectedOutput = 0;
input = null;
actualOutput, result;

// Act
airport1.planeLands(input)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane unable to land: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 4
console.log(`***When something that isn't a plane attempts to land at the airport, a message is returned***`);

// Arrange
airport1 = new Airport()
expectedOutput = "Unable to land";
input = null;
actualOutput, result;

// Act
actualOutput = airport1.planeLands(input)

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Message is returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

//USER STORY 2
// Test 2.1
console.log(`*** Check the value returned for default airport capacity ***`);

// Arrange
expectedOutput = 10;
actualOutput, result;

// Act
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`correct default capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;
