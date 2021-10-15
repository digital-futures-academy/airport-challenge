const Airport = require('../src/airport');

let airport, item, expectedOutput;

//Arrange
airport = new Airport();
plane = new Plane();

expectedOutput = 1;

//Act
airport.landPlane(plane);

//Assert
result = test.assertEquals(airport.length, expectedOutput);

module.export = Airport.spec;