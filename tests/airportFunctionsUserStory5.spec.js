//USER STORY 5 TESTS

// As an air traffic controller
// To avoid confusion
// I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a');


//Test 1: airportControl() does not land plane because it already exists, thus not calling landPlanes()
console.log('Test 1: airportControl() does not land plane because it already exists, thus not calling landPlanes()');
//Arrange
input1 = plane1;
airport1.capacityMutator(3);
expectedOutput = 1
//Act
airport1.airportControl(input1, 'land');
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
airport1.capacityMutator(1);

//##################################################################################################

