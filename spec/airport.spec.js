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
console.log('Test 4, check if a plane has left the airport:') //This test returns true no matter what and I don't understand why
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

plane = ['Boeing 747', 'Concorde', 'Hawker Hurricane'];
expectedOutput = false;

//Act
airport.landPlane(plane);
actualOutput = airport.planeTakeoff(['U-2 spy plane']);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


//TEST 6
console.log("Test 6, prevent takeoff when weather is stormy:");
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747', 'Concorde', 'Hawker Hurricane'];
expectedOutput = false; //if the weather is stormy, otherwise true

//Act
airport.landPlane(plane);
actualOutput = airport.planeTakeoff(['Boeing 747']);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


//TEST 7
console.log("Test 7, prevent landing when weather is stormy:");
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747', 'Concorde', 'Hawker Hurricane'];
expectedOutput = false; //if the weather is stormy, otherwise true

//Act
actualOutput = airport.landPlane(plane);

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(airport);
console.log(result);


//TEST 8
console.log("Test 8, planes that have landed must be at an airport:");
//Arrange
airport = new Airport();
plane = new Plane();

plane = ['Boeing 747', 'Concorde', 'Hawker Hurricane', 'U-2 spy plane'];
expectedOutput = airport;

//Act
airport.landPlane(plane);
actualOutput = airport.printAirport();

//Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(airport);  //Not sure why this outputs differently to my printAirport function when it's essentially the same thing, so can't get true to return and I don't really know how else to test this.
console.log(result);

/* The weather obviously affects previous tests as well, so now some tests may say false if it is stormy.
Disabling the weather should make tests 1 - 5 return true. */