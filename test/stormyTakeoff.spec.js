const { assertEquals } = require('./testingFramework');
const airport = require('../src/airport');
let actualOutput, expectedOutput, result;
const plane = { id: 'JB007' };

//Extended Criteria
// Test 1: Preventing the plane to takeOff when the weather is stormy
console.log('--------Extended Criteria--------');
console.log('');
console.log('Test 1: Preventing the plane to takeOff when the weather is stormy');

// Arrange
airport.listOfPlanes.push(plane); // Adding the plane to the airport
airport.isStormy = () => true;
expectedOutput = 'Plane take-off failed: Weather is stormy';

// Act
actualOutput = airport.weatherTakeoff(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 1: Preventing take-off in stormy weather: ${result}`);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

// Test 2: If the weather is sunny but the plane is not at airport

console.log('Test 2: If the weather is sunny but the plane is not at airport');

// Arrange
const planeAtAirport = { id: 'MS345' };
const planeNotAtAirport = { id: 'MS678' };
airport.listOfPlanes = [planeAtAirport]; // Adding the plane to the airport
airport.isStormy = () => false;

expectedOutput = 'Plane is not at the airport, cannot take off';

// Act
actualOutput = airport.weatherTakeoff(planeNotAtAirport);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 2: If the weather is sunny but the plane is not at airport: ${result}`);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
console.log('');


// Test 3: Allowing the plane to take off when the weather is sunny
console.log('Test 3: Allowing the plane to take off when the weather is sunny');

// Arrange
airport.listOfPlanes.push(plane); // Adding the plane to the airport
airport.isStormy = () => false; // Stubbing the isStormy method to always return false (sunny weather)

expectedOutput = 'Plane take-off confirmed';

// Act
actualOutput = airport.weatherTakeoff(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 3: Allowing take-off in sunny weather: ${result}`);
console.log(`Test 3: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//cleanup

actualOutput = undefined;
expectedOutput = undefined;
result = undefined;