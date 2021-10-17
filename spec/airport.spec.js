const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals, printResult } = require('../test-framework');

let airport, expectedOutput, actualOutput, plane, testMsg;

//Arrange
plane = new Plane();
airport = new Airport();
testMsg = "Testing to land a plane so there must be 1 plane at the airport";
expectedOutput = 1;

//Act
airport.landPlane(plane);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);
