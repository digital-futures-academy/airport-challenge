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
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('testing if 1 plane in airport', actualOutput);

expectedOutput = null;
//-------------------------------------------------------------------------//

//Arrange
expectedOutput = 0;

//Act
airport.sendPlane(plane);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('remove plane from airport', actualOutput);

expectedOutput = null;
//-------------------------------------------------------------------------//

let plane1, plane2;

//Arrange
plane1 = new Plane();
plane2 = new Plane();
expectedOutput = 2;

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('testing if 2 planes in airport', actualOutput);

expectedOutput = null;
//-------------------------------------------------------------------------//

//Arrange
expectedOutput = 1;

//Act
airport.sendPlane(plane2);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('Testing if removing 1 plane with 2 planes in airport', actualOutput);

expectedOutput = null;

//-------------------------------------------------------------------------//

//Arrange
expectedOutput = 2;

//Act
airport.landPlane(plane2);
airport.sendPlane(plane);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('Testing if removing plane not in airport with 2 planes', actualOutput);

expectedOutput = null;

//-------------------------------------------------------------------------//

//Arrange
expectedOutput = 2;

//Act
airport.landPlane(plane2);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('Testing if landing a plane that already exists in airport', actualOutput);

expectedOutput = null;

//-------------------------------------------------------------------------//

//Arrange
expectedOutput = 20;

//Act
airport.setMaxCapacity(20);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getMaxCapacity());
printResult('Testing overriding max capacity', actualOutput);

expectedOutput = null;

//-------------------------------------------------------------------------//

//Arrange
expectedOutput = 2;

//Act
airport.setMaxCapacity(2);
airport.landPlane(plane);

//Assert
actualOutput = assertEquals(expectedOutput, airport.getCurrentCapacity());
printResult('Testing trying to land a plane when airport is full', actualOutput);

expectedOutput = null;

//-------------------------------------------------------------------------//

//Arrange
expectedOutput = false;

//Act
airport.sendPlane(plane1);

//Assert
actualOutput = assertEquals(expectedOutput, airport.isPlaneInAirport(plane1));
printResult('Testing to check if plane is in airport after sending', actualOutput);

expectedOutput = null;

