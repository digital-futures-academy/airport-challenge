const Airport = require('../src/airport');
const Plane = require('../src/plane');
const assertEquals = require('../test-framework/test-framework');

let airport, plane, expectedOutput, actualOutput;


//TEST 1
console.log('Test 1, plane landing in airport:')
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747'];
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
console.log(airport);
console.log(result);

module.export = Airport.spec;


//TEST 3
console.log('Test 3, prevent landing when the airport is full:')
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747', 'Concorde', 'Hawker Hurricane'];
airport.changeCapacity(2);

expectedOutput = false;

//Act
actualOutput = airport.landPlane(plane);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(airport);
console.log(result);


//TEST 4
console.log('Test 4, check if a plane has left the airport:')
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747'];
airport.landPlane(plane);
expectedOutput = false;
airport.planeTakeoff(plane);

//Act
actualOutput = airport.isPlaneInAirport(plane);

//Assert
result = assertEquals(actualOutput, expectedOutput);
airport.printAirport();
console.log(result);


//TEST 5
console.log("Test 5, prevent asking the airport to let planes take-off which are not in the airport, or land a plane that's already landed:");
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747', 'Concorde', 'Hawker Hurricane', 'Concorde'];
expectedOutput = false;

//Act
airport.landPlane(plane);
actualOutput = airport.planeTakeoff(['U-2 spy plane']);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


//TEST 6
