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

airport = null;
expectedOutput = null;
actualOutput = null;
plane = null;
testMsg = null;
//----------------------------------------------------------------------------------//

//Arrange
airport = new Airport();
testMsg = "Testing overriding default airport capacity";
expectedOutput = 20;

//Act (default capacity will be set to 10)
airport.setMaxCapacity(20);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getMaxCapacity());
printResult(testMsg, actualOutput);

