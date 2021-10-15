const Airport = require('../src/airport');
const Plane = require('../src/plane');
const assertEquals = require('../test-framework/test-framework');

let airport, plane, expectedOutput, actualOutput;


//TEST 1
console.log('Test 1, plane landing in airport:')
//Arrange
airport = new Airport();
plane = new Plane();

plane = 'Boeing 747';
expectedOutput = 1;

//Act
airport.landPlane(plane);
actualOutput = airport.getCurrentCapacity();

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


//TEST 2
console.log('Test 2, change of airport capacity:')
//Arrange
airport = new Airport();

expectedOutput = 5;

//Act
airport.changeCapacity(5);
actualOutput = airport.getMaxCapacity();

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

module.export = Airport.spec;


//TEST 3
console.log('Test 3, prevent landing when the airport is full:')
//Arrange
airport = new Airport();
plane = new Plane();

plane = 'Boeing 747';
airport.changeCapacity(10);
expectedOutput = true;

//Act
actualOutput = airport.landPlane(plane);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);