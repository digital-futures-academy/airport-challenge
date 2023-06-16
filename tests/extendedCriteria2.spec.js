//Extended Criteria User Story 2

// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a')
const weather = new Weather()

//Test 1: Plane can't land when it\'s stormy
console.log('Test 1: Plane can\'t land when it\'s stormy');
//Arrange
weather.setCurrentWeather('stormy');
airport1.getWeather(weather);
airport1.landPlane(plane1);
expectedOutput = 0;
//Act
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
weather.setCurrentWeather(undefined);

//##################################################################

