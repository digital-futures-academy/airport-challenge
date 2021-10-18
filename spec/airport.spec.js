const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals, printResult } = require('../test-framework');

let airport, expectedOutput, actualOutput, plane1, plane2, testMsg;

//Arrange
plane1 = new Plane();
airport = new Airport();
testMsg = 'Testing to land a plane so there must be 1 plane at the airport';
expectedOutput = 1;

//Act
airport.landPlane(plane1);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);

airport = null;
expectedOutput = null;
actualOutput = null;
plane1 = null;
testMsg = null;
//----------------------------------------------------------------------------------//

//Arrange
airport = new Airport();
testMsg = 'Testing overriding default airport capacity';
expectedOutput = 20;

//Act (default capacity will be set to 10)
airport.setMaxCapacity(20);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getMaxCapacity());
printResult(testMsg, actualOutput);

airport = null;
expectedOutput = null;
actualOutput = null;
testMsg = null;
//----------------------------------------------------------------------------------//

//Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
testMsg = 'prevent plane from landing when airport is full';
expectedOutput = 1;

//Act (airport capacity set to 1 with 1 plane already in airport)
airport.setMaxCapacity(1);
airport.landPlane(plane1);
airport.landPlane(plane2);

//Assert 
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);

airport = null;
expectedOutput = null;
actualOutput = null;
plane1 = null;
plane2 = null;
testMsg = null;
//----------------------------------------------------------------------------------//

//Arrange 
airport = new Airport();
plane1 = new Plane();
testMsg = 'send a plane off from the airport';
expectedOutput = 0;

//Act (land plane, then send plane, with 0 planes at airport)
airport.landPlane(plane1);
airport.sendPlane(plane1);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);

airport = null;
expectedOutput = null;
actualOutput = null;
plane1 = null;
testMsg = null;
//----------------------------------------------------------------------------------//

//Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
testMsg = 'avoid sending plane not at airport, landing if already at airport';
expectedOutput = 1;
airport.landPlane(plane1); //1 plane already at airport

//Act
airport.landPlane(plane1);
//not in airport (done twice otherwise it will pass when it shouldn't)
airport.sendPlane(plane2);
airport.sendPlane(plane2);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);

airport = null;
expectedOutput = null;
actualOutput = null;
plane1 = null;
plane2 = null;
testMsg = null;
//----------------------------------------------------------------------------------//

//Arrange
airport = new Airport();
plane1 = new Plane();
testMsg = 'prevent takeoff when weather is stormy';
expectedOutput = 1;
airport.landPlane(plane1);
airport.setWeather('stormy'); //to stub random behavior

//Act
airport.sendPlane(plane1);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult(testMsg, actualOutput);

airport = null;
expectedOutput = null;
actualOutput = null;
plane1 = null;
testMsg = null;
//----------------------------------------------------------------------------------//
