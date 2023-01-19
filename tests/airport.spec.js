const { assertEquals } = require(`../testing-framework`);
const Airport = require(`../src/airport`);
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;

//Test 1 - airportPlanes length increases to 1 when landPlane is called on an empty airport with a Plane

console.log(`============================`);
console.log(`Test 1 - landPlane lands a Plane into the airport`);

//Arrange
airport = new Airport(); //creating a new airport
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Plane landed in airport: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 2 - landPlane should only add Plane instances to the airportList

console.log(`============================`);
console.log(`Test 2 - landPlane only lands Planes into the airport`);

//Arrange
airport = new Airport(); //creating a new airport
plane = `something`;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Only Plane instances landed in airport: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 3 - falsy value planes should not be added to airport

console.log(`============================`);
console.log(`Test 3 - falsy value planes should not be added to airport`);

//Arrange
airport = new Airport(); //creating a new airport
plane = null;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 3: Falsy value planes not added to airport: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 4 - The airport has a default capacity 

console.log(`============================`);
console.log(`Test 4 - Airport has a default capacity`);

//Arrange

airport = new Airport();
expected = 10;

//Act
actual = airport.capacity;
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 4: Airport has a default capacity: ${result}`);

//Clean up
plane = null;
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 5 - Airport default can be changed to 100  

console.log(`============================`);
console.log(`Test 5 - Airport default can be changed`);

//Arrange

airport = new Airport();
expected = 100;

//Act
airport.changeCapacity(100);
actual = airport.capacity;
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 5: Airport default capacity changes to 100: ${result}`);

//Clean up
plane = null;
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);


//Test 6 -   Need to know if airport is full

console.log(`============================`);
console.log(`Test 6 - Is Airport full?`);

//Arrange

airport = new Airport([new Plane()], 1);
expected = true;

//Act
actual = airport.isAirportFull();
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 6: Airport is full: ${result}`);

//Clean up
plane = null;
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 7 -   Plane cannot land because airport is full

console.log(`============================`);
console.log(`Test 7 - If airport is full don't land plane`);

//Arrange

airport = new Airport();
plane = new Plane();
expected = 0;

//Act
airport.landPlane();
actual = airport.airportPlanes.length;
    
//Assert
result = assertEquals(expected, actual);
console.log(`Test 7 - If airport is full don't land plane: ${result}`);

//Clean up
plane = null;
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);
