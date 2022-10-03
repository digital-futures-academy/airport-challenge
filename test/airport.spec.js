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
plane = { id: `plane1` };
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
console.log(`Test 2: The airport has a capcity of 3: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//-*****************************************************************************************************

//Test 2b - create new airport with increased capacity of 5
console.log("==============================================");
console.log("Test 2: check new airport has capacity of 5");

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




