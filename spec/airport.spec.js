const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals, printResult } = require('../test-framework');


let airport, expectedOutput, actualOutput, plane;

//Arrange
plane = new Plane();
airport = new Airport();
expectedOutput = 1;

//Act
airport.landPlane(plane);

//Assert
actualOutput = assertEquals(expectedOutput, airport.planes.length);
printResult('testing if 1 plane in airport', actualOutput);


