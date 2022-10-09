const { assertEquals } = require("../test/testing-framework");
const Airport = require("../src/airport");

let expected, actual, result, airport, plane;

//Test 1 is if the array length increases by one when landPlane is called.
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Landing the plane in the airport");

// Arrange
airport = new Airport();
let initialLength = airport.planesInAirport.length;
plane = { id: "plane1" };
airport.landPlane(plane);
expected = initialLength + 1;

// Act
actual = airport.planesInAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: has the array increased by one: ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;
initialLength = null;


//Test 1b is the specific plane object existing in the array after the plane has been landed.
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Landing the plane in the airport");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
airport.landPlane(plane);
expected = true;

// Act
actual = airport.checkDuplicate(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1b: is the specific plane object in the array after the plane has landed: ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 2a is the airport plane capacity the default value
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the airport plane capacity is it's default value");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
plane2 = { id: "plane2" };
plane3 = { id: "plane3" };
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);

expected = 3;


// Act
actual = airport.planesInAirport.length

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2a: Is the airport capacity set to the default value? : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 2b is the airport plane capacity the default value
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the airport plane capacity can have an overridden value");

// Arrange
airport = new Airport(5);
plane = { id: "plane1" };
plane2 = { id: "plane2" };
plane3 = { id: "plane3" };
plane4 = { id: "plane4" };
plane5 = { id: "plane5" };
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);
expected = 5;


// Act
actual = airport.planesInAirport.length

//Assert
result = assertEquals(expected, actual);
console.log(`Test 2b: Is the airport capacity overridden with a custom capacity : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 3 checking if the airport capacity is full when trying to land a plane
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the airport capacity is full when trying to land a plane");

// Arrange
airport = new Airport(1);
plane = { id: "plane1" };
plane2 = { id: "plane2" };
airport.landPlane(plane);
expected = true;


// Act
actual = airport.landPlane(plane2);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3: Is the airport full when trying to land a plane : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 4 checking if the plane is being removed from the airport
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the plane is being removed from the airport");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
plane2 = { id: "plane2" };
airport.landPlane(plane);
airport.landPlane(plane2);
expected = true;


// Act
actual = airport.removePlane(plane2);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 4: Is the plane being removed from the airport successfully : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 5 checking if the plane already exists in the airport before trying to land a plane there
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the plane already exists in the airport");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
airport.landPlane(plane);
expected = true;

// Act
actual = airport.landPlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5: Is the plane already in the airport : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 5b checking if the plane does not exists in the airport before trying to make it take off from the airport
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking if the plane does not exist in the airport before trying to make it take off from the airport");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
airport.landPlane(plane);
expected = true;

// Act
actual = airport.removePlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5b: Is the plane trying to take off; in the airport : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 6 checking whether the plane is removed if the weather is stormy
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking whether the plane is removed if the weather is stormy");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
airport.landPlane(plane);
expected = false;
console.log(airport.checkWeather());

// Act
actual = airport.removePlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 6: Is the plane being prevented from taking off when the weather is stormy : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;


//Test 7 checking whether the plane is landing if the weather is stormy
console.log("---------------------------------------------------------------------------------------------------------");
console.log("Checking whether the plane is landing if the weather is stormy");

// Arrange
airport = new Airport();
plane = { id: "plane1" };
expected = false;
console.log(airport.checkWeather());

// Act
actual = airport.removePlane(plane);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 7: Is the plane being prevented from landing when the weather is stormy : ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;