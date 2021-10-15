const Airport = require('../src/airport');
const Plane = require('../src/plane');
const assertEquals = require('../test-framework/test-framework');

let airport, plane, expectedOutput, actualOutput;


//TEST 1
console.log('Test 1:')
//Arrange
airport = new Airport();
plane = new Plane();

plane = 'Boeing 747';
expectedOutput = 1;

//Act
actualOutput = airport.landPlane(plane);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


//TEST 2
console.log('Test 2:')
//Arrange
airport = new Airport();
plane = new Plane();

expectedOutput = 5;

//Act
actualOutput = airport.capacity(5);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

module.export = Airport.spec;