const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals, printResult } = require('../test-framework');

let airport, expectedOutput, actualOutput, plane, testMsg;

//Act
plane = new Plane();
airport = new Airport();
testMsg = "Testing to land a plane so there must be 1 plane at the airport";
expectedOutput = 1;

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);
