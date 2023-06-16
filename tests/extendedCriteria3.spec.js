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

//Test 1: Plane has airportId for where is has landed, can be received with getAirportID()
console.log('Test 1: Plane has airportId for where is has landed, can be received with getAirportID()');
//Arrange
expectedOutput = 'no airport id';
//Act
actualOutput = plane1.getAirportId();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//##################################################################

//Test 2: airport Id can be set with setAirportId()
console.log('Test 2: airport Id can be set with setAirportId()');
//Arrange
expectedOutput = 'Gatwick';
plane1.setAirportId('Gatwick');
//Act
actualOutput = plane1.getAirportId();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
plane1.setAirportId(undefined);

//##################################################################

//Test 3: airport has its own id that can be received with getAirportId()
console.log('Test 3: airport has its own id that can be received with getAirportId()');
//Arrange
expectedOutput = 'no id';
//Act
actualOutput = airport1.getAirportId();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
plane1.setAirportId(undefined);

//##################################################################

//Test 4: airport has its own id that can be set  with setAirportId()
console.log('Test 4: airport has its own id that can be set  with setAirportId()');
//Arrange
expectedOutput = 'gatwick';
airport1.setAirportId('gatwick');
//Act
actualOutput = airport1.getAirportId();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
plane1.setAirportId(undefined);

//##################################################################

//Test 5: airport class can set plane id when it lands Id, thus landed planes are at an airport
console.log('Test 5: airport class can set plane id when it lands Id');
//Arrange
expectedOutput = 'Gatwick';
airport1.setAirportId('Gatwick');
airport1.landPlane(plane1);
//Act
actualOutput = plane1.getAirportId();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//##################################################################

