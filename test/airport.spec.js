const { assertEquals, assertNull, assertTrue, assertFalse } = require("../testing-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let expected, actual, result, airport, plane;

// Test 1a - Validation - check if the length of an empty parkedPlanes array increases by 1 when landPlane() is called - returns true if so
console.log("--------------------");
console.log("Landing a plane at the airport")

//Arrange 
airport = new Airport();
plane = new Plane(1);
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.parkedPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1a: - Validation - A plane has been added to the parkedPlanes array as the array's length is now 1: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;

// Test 1b - Verification - Check if a plane object is added to the parkedPlanes array when landPlane() is called - matches the return string from the landPlane() method call with the expected string for this method - returns true when matched
console.log("--------------------");
console.log("Landing a plane at the airport continued")

//Arrange 
airport = new Airport();
plane = new Plane(1);
expected = `Plane ${plane.getId()} has landed at the airport`;

//Act
actual = airport.landPlane(plane);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1b: - Verification - The plane object passed to the landPlane() method has been added to the parkedPlanes array as the id of this plane in the landPlane's return string is as expected: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;

// Test 2a - Check if the airportCapacity property for an Airport object has been set with the setAirportCapacity() method - returns true if airportCapacity's value matches the value used as a parameter for setAirportCapacity() 
console.log("---------------------");
console.log("Checking if the airport has an airportCapacity variable which was set using setAirportCapacity()")

//Arrange 
airport = new Airport();
let requiredAirportCapacity = 1;
expected = requiredAirportCapacity;

//Act
airport.setAirportCapacity(requiredAirportCapacity);
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2a - airportCapacity property of the Airport object matches the value used as the argument for setAirportCapacity(): ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
requiredAirportCapacity = undefined;
airport = null;
plane = null;

// Test 2b - Check if the airportCapacity property for an Airport object has been set as the default value using the Airport class constructor - returns true if airportCapacity's value matches the default value of the constructor  
console.log("---------------------");
console.log("Checking if the airport has an airportCapacity variable which was set as the default value using the classes' constructor")

//Arrange 
airport = new Airport();
expected = 2;

//Actual
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2b - airportCapacity property of the Airport object matches the default value of 2 used in the constructor for the Airport class: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;

// Test 3a - Verification - Check that landPlane() returns a string stating that a given plane can not land at the airport as it is full
console.log("---------------------");
console.log("Checking that landPlane() returns a string stating that the plane can not land at at the airport as it is full")

//Arrange 
let airportCapacity = 1
airport = new Airport(airportCapacity);
plane = new Plane(1);
airport.landPlane(plane);
plane2 = new Plane(2);
expected = `Plane ${plane2.getId()} can not land as the airport is full`;

//Actual
actual = airport.landPlane(plane2);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 3a - landPlane() returns a string stating that a given plane can not land at the airport as it is full: ${result} `);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
plane2 = null;

// Test 3b - Validation - Check that isAirportFull() returns true when planesLanded array length property matches the airportCapacity property
console.log("---------------------");
console.log("Checking that isAirportFull() returns true when planesLanded array length property equals the airportCapacity property")

//Arrange 
airportCapacity = 2;
airport = new Airport(airportCapacity);
plane = new Plane(1);
airport.landPlane(plane);
plane2 = new Plane(2);
airport.landPlane(plane2);

//Actual
actual = airport.isAirportFull();

//Assert
result = assertTrue(actual);
console.log(`Test 3b - isAirportFull() returns true when planesLanded array is full: ${result} `);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
plane2 = null;
airportCapacity = undefined;

// Test 4a - Verification - The return string from the takeOffPlane() method call shows the correct plane object by it's planeID value has been removed from the parkedPlanes array - matches the return string from the takeOffPlane() method call with the expected return string for this method - returns true when matched
console.log("---------------------");
console.log("Plane taking off from airport")

//Arrange 
airportCapacity = 2;
airport = new Airport(airportCapacity);
plane = new Plane(1);
airport.landPlane(plane);
plane2 = new Plane(2);
airport.landPlane(plane2);
expected = `Plane ${plane2.getId()} has taken off from the airport`;

//Actual
actual = airport.takeOffPlane(plane2.getId());

//Assert
result = assertEquals(actual, expected);
console.log(`Test 4a - The return string from the takeOffPlane() method call shows the correct plane object by it's planeID value has been removed from the parkedPlanes array: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
plane2 = null;
airportCapacity = undefined;

// Test 4b - Validation - Check if the length of parkedPlanes array decreases by 1 when takeOffPlane() is called 
console.log("---------------------");
console.log("Plane taking off from airport continued")

//Arrange 
airportCapacity = 2;
airport = new Airport(airportCapacity);
plane = new Plane(1);
airport.landPlane(plane);
plane2 = new Plane(2);
airport.landPlane(plane2);
expected = airport.parkedPlanes.length - 1;

//Actual
airport.takeOffPlane(plane.getId());
actual = airport.parkedPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 4b - Check if the length of an parkedPlanes array decreases by 1 when takeOffPlane() is called: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
plane2 = null;
airportCapacity = undefined;

// Test 5a - isPlaneAtAirport() returns true if a matching plane object identified by it's id is in the parkedPlanes array
console.log("---------------------");
console.log("Finding if a plane is at airport")

//Arrange 
airportCapacity = 2;
airport = new Airport(airportCapacity);
plane = new Plane(1);
airport.landPlane(plane);
plane2 = new Plane(2);
airport.landPlane(plane2);
expected = true;

//Actual
actual = airport.isPlaneAtAirport(plane2.getId());

//Assert
result = assertEquals(actual, expected);
console.log(`Test 5a - isPlaneAtAirport() returns true if a matching plane object identified by it's id is in the parkedPlanes array: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
plane2 = null;
airportCapacity = undefined;

// Test 5b - isPlaneAtAirport() returns false if a plane object is not matched by it's id in the parkedPlanes array
console.log("---------------------");
console.log("Finding if a plane is at airport continued")

//Arrange 
airportCapacity = 3;
airport = new Airport(airportCapacity);
plane = new Plane(1);
airport.landPlane(plane);
plane2 = new Plane(2);
airport.landPlane(plane2);
plane3 = new Plane(3);
expected = false;

//Actual
actual = airport.isPlaneAtAirport(plane3.getId());

//Assert
result = assertEquals(actual, expected);
console.log(`Test 5b - isPlaneAtAirport() returns false if a plane object is not matched by it's id in the parkedPlanes array: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
plane2 = null;
plane3 = null;
airportCapacity = undefined;