const { assertEquals } = require(`./testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - landPlane() should only add Plane instances to increase the number of planes in the Airport.
//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 1: Land Plane in an Airport: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 1

// Test 2 - Only instances of Plane can be added to the array of planes in the Airport.
//Arrange
airport = new Airport();
plane = "new Plane";
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 2: Try to land a string in an Airport: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 2

// Test 3 - Try and land falsy values in the Airport
//Arrange
airport = new Airport();
plane = null;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 3: Try to land falsy value in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 3

// Test 4 - Check the default capacity of Planes in an Airport
//Arrange
airport = new Airport();
expected = 3;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 4: Expected capacity of planes in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 4

// Test 5 - Setting up deafault capacity when instantiating an Airport
//Arrange
airport = new Airport(20);
expected = 20;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 5: Overridden capacity of Planes in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);

// End of Test 5

// Test 6
//Arrange
airport = new Airport("30");
expected = 3;

//Act
actual = airport.capacity;
//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 6: Overridden wrong type of capacity of Planes in an Airport: ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 6

// Test 7 - Check setCapacity() to set the capacity of the Airport after initialization.

//Arrange
airport = new Airport();
expected = 3;

//Act
airport.setCapacity(`20`);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 7: Change capacity of Airport using setCapacity(): ${
    result ? `Passed` : `Failed`
  }`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
console.log(`===============================================`);
// End of Test 7

// Test 8 - Check isAirportFull() logic is working by comparing capacity and planesInAirport.length.

//Arrange
airport = new Airport();
plane = new Plane();
plane1 = new Plane();
plane2 = new Plane();
plane3 = new Plane();
expected = true;

//Act
airport.landPlane(plane);
airport.landPlane(plane1);
airport.landPlane(plane2);
actual = airport.isAirportFull();

//Assert
result = assertEquals(expected, actual);
console.log(`Test 8: Is Airport full: ${result ? `Passed` : `Failed`}`);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
plane1 = null;
plane2 = null;
plane3 = null;
console.log(`===============================================`);
// End  of Test 8

// Test 9 - Take off Plane should reduce the length of planesInAirport
//Arrange
airport = new Airport();
plane1 = new Plane(1);
plane2 = new Plane(2);
plane3 = new Plane(3);
expected = 2;

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
console.log(airport.planesInAirport.length);

airport.takeOffPlane(plane2.getID());
console.log(airport.planesInAirport.length);
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 9: Did plane take off: ${result ? `Passed` : `Failed`}`);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
console.log(`===============================================`);
// End of Test 9

// Test 10 - Check if Plane exists in Airport
//Arrange
airport = new Airport();
plane1 = new Plane(1);
plane2 = new Plane(2);
expected = true;

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);
actual = airport.doesPlaneExist(plane2);
//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 10: Does plane exits in Airport: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane1 = null;
plane2 = null;
console.log(`===============================================`);
// End of Test 10

// Test 11 - Take off non-existent Plane
//Arrange
airport = new Airport();
plane1 = new Plane(1);
expected = true;

//Act
airport.landPlane(plane1);
console.log(airport.doesPlaneExist(plane1));
console.log(airport.planesInAirport.length);
airport.takeOffPlane(plane1);
console.log(airport.doesPlaneExist(plane1));
console.log(airport.planesInAirport.length);

//Assert
result = assertEquals(expected, actual);
console.log(
  `Test 11: Existing plane take off: ${result ? `Passed` : `Failed`}`
);

//Clear up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane1 = null;
plane2 = null;
console.log(`===============================================`);
// End of Test 11
