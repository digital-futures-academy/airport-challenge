const Airport = require('../src/airport');
const Plane = require('../src/plane');
const assertEquals = require('../test-framework/test-framework');

let airport, plane, expectedOutput;

//Arrange
airport = new Airport();
plane = new Plane();

expectedOutput = 1;

//Act
airport.landPlane(plane);

//Assert
result = assertEquals(airport.length, expectedOutput);
console.log(result);

module.export = Airport.spec;