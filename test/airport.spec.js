const { assertEquals } = require("../testing-framework");
const Airport = require("../src/airport.js");

let result;
let actual;
let expected;

//Test 1 - add a plane to an airport
console.log("==============================================");
console.log("Test 1: land a plane at an airport");

//Arrange
airportA = new Airport();
expected = 1;

//Act
airportA.land("Big Red 1");
actual = airportA.airportPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1: A plane was added to an airport: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-******************************************************************************************************

//Test 2a - set default airport capacity
console.log("==============================================");
console.log("Test 2: return default capacity of 3");

//Arrange
airportA = new Airport();
expected = 3;


//Act
actual = airportA.capacity;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2: The airport has a capacity of 3: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-*****************************************************************************************************

//Test 2b - create new airport with increased capacity of 5
console.log("==============================================");
console.log("Test 2b: check new airport has capacity of 5");

//Arrange
airportA = new Airport(5);
expected = 5;

//Act
actual = airportA.capacity;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2b: The airport has a capacity of 5: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


//-*****************************************************************************************************

//Test 3 - prevent landing when airport is full
console.log("==============================================");
console.log("Test 3: check whether airport is at capacity");

//Arrange
airportA = new Airport(2);
expected = true;

//Act
airportA.land("Big Red 1");
airportA.land("Small Blue 2");
actual = airportA.checkFull();

//Assert
result = assertEquals(actual, expected);
console.log(`Test 3: Airport is full: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-******************************************************************************************************

//Test 4 - instruct plane to take off and confirm it has
console.log("==============================================");
console.log("Test 4: remove plane from airport");

//Arrange
airportA = new Airport(2);
expected = 1;

//Act
airportA.land("Yellow 12");
airportA.land("Orange 7");
airportA.takeOff("Orange 7");
actual = airportA.airportPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 4: Plane has taken off SAFELY: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-******************************************************************************************************

//Test 5a - only take off or land if you can
console.log("==============================================");
console.log("Test 5a: check plane is in the airport - for take off");

//Arrange
airportA = new Airport();
expected = true;

//Act
airportA.land("Yellow 12");
airportA.land("Orange 7");
actual = airportA.takeOff("Big Red 1");

//Assert
result = assertEquals(actual, expected);
console.log("Test 5a: Plane is in the airport: " + result);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-******************************************************************************************************
//Test 5b - check if plane in airport before landing
console.log("==============================================");
console.log("Test 5b: check plane is in the airport - for landing");

//Arrange
airportA = new Airport();
expected = true;

//Act
airportA.land("Orange 7");
actual = airportA.land("Big Red 1");

//Assert
result = assertEquals(actual, expected);
console.log("Test 5b: Plane can land: " + result);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-******************************************************************************************************
//Test 6 - check the weather conditions
console.log("==============================================");
console.log("Test 6: check weather conditions");

//Arrange
airportA = new Airport();
expected = "stormy";

//Act
actual = airportA.checkWeather();

//Assert
result = assertEquals(actual, expected);
console.log("Test 6: Weather conditions are " + actual);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


