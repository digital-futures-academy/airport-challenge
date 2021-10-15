const Airport = require('../src/airport');
const Plane = require('../src/plane');

let airport, plane, expectedOutput;

//Arrange
airport = new Airport();
plane = new Plane();

expectedOutput = 1;

//Act
airport.landPlane(plane);

//Assert
result = test.assertEquals(airport.length, expectedOutput);

module.export = Airport.spec;