//Extended Criteria User Story 3

// As an air traffic controller
// To count planes easily
// Planes that have landed must be at an airport

//perhaps:
//  -each plane has a id of the airport is has landed at, give each airport a unique id similar to the plane
//  -planed has an airportID setter and the network class sees if each plane has landed at the corerct airport id

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a')

//Test 1: Plane has landed
console.log('Test 1: Plane has landed');
//Arrange
expectedOutput = 1;
airport1.landPlane(plane1);
//Act
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//##################################################################