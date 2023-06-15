//Extended Criteria User Story 3

// As an air traffic controller
// To count planes easily
// Planes that have landed must be at an airport

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a')
const weather = new Weather()

//Test 1: Weather class returns the current weather
console.log('Test 1: Weather class returns the current weather');
//Arrange
expectedOutput = undefined;
//Act
actualOutput = weather.getWeather();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//##################################################################