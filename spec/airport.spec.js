const Airport = require('../src/airport');
const Plane = require('../src/plane');
const assertEquals = require('../test-framework/test-framework');

let airport, plane, expectedOutput, actualOutput;

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

module.export = Airport.spec;