const { assertEquals } = require(`../testing.framework`);
const Airport = require(`../src/airport`);
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;



// Test 1:  AirportPlanes length increases to 1 when addPlane is called on an empty Airport with a Plane
console.log(`============================`);
console.log(`Test 1 - addPlane lands a Plane into the Airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1
// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: addPlane lands a Plane into the Airport : ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 1A: Edge Case - Only plane instances can be added to the airport.
console.log(`===========================`)
console.log(`Test 1A: Edge Case - only plane instances can be added to the airport`)

//Arrange 
airport = new Airport();
plane = `Ryanair`;
expected = 0;
//Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

//Assert 
result = assertEquals(expected, actual);
console.log(`Test 1A: Edge Case - only plane instances can be added to the airport: ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2: The airport has a default capacity of 0 (Using constructor method)
console.log(`=============================`)
console.log(`Test 2: The airport has a default capacity.`)

//Arrange
airport = new Airport();
expected = 0;
//Act

actual = airport.capacity

//Assert
result = assertEquals(expected, actual); 
console.log(`Test 2: Airport has a default capacity of 0: ${result}`)

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;
plane = null;



//Test 3: The airport capacity can be overridden when appropriate using the constructor method. 
console.log(`=============================`)
console.log(`Test 3: The airport capacity can be overridden when appropriate using the constructor method.`)

//Arrange 
airport = new Airport(1);
expected = 1;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 3: The airport capacity can be overridden when appropriate using the constructor method: ${result}`)


//Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 



//Test 4: The airport prevents landing when the airport capacity is full (3)
console.log(`===========================`)
console.log(`Test 4: The airport prevents landing when the airport capacity of 3 is full.`)

//Arrange
airport = new Airport(3);
let plane7 = new Plane();
let plane8 = new Plane();
let plane9 = new Plane();
let plane10 = new Plane();
airport.landPlane(plane7);
airport.landPlane(plane8);
airport.landPlane(plane9);
expected = 3
//Act

airport.landPlane(plane10);
actual = airport.airportPlanes.length

//Assert
result = assertEquals(expected, actual); 
console.log(`Test 4: The airport prevents landing when the airport capacity of 3 is full: ${result}`)

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 



//Test 5: The airport can confirm that a plane is not in the airportPlanes array by instructing it to takeOff
console.log(`=============================`)
console.log(`Test 5: The airport can confirm that a plane is not in the airportPlanes array using the takeOff method.`)

//Arrange  
airport = new Airport();
plane = new Plane();
plane1 = new Plane();
expected = "This plane is not at the airport"

//Act
airport.landPlane(plane);
actual = airport.takeOff(plane1)

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5: The airport can confirm that a plane is not in the airportPlanes array using the takeOff method: ${result}`)

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 



//Test 5A: The airport can confirm through the airportPlanes array that it has taken Off.
console.log(`=============================`)
console.log(`Test 5A: The airport can confirm through the airportPlanes array that it has taken Off.`)

//Arrange  
airport = new Airport();
plane5 = new Plane();
plane6= new Plane();
airport.landPlane(plane6)
airport.landPlane(plane5)
expected = 1;

//Act
airport.takeOff(plane6)
actual = airport.airportPlanes.length

//Assert
result = assertEquals(expected, actual);
console.log(`Test 5A: The airport can confirm through the airportPlanes array that it has taken Off: ${result}`)

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 


//Test 6: The airport does not allow planes to takeOff that are not in the airportPlanes array.
console.log(`===============================`)
console.log(`Test 6: The airport does not allow planes to execute the takeOff method that are not included in the airportPlanes array.`)

//Arrange 
airport = new Airport();
plane1 = new Plane();
expected = "This plane is not at the airport"

//Act 
airport.airportPlanes.length;
actual = airport.takeOff(plane1);

//Assert
result = assertEquals(expected, actual);
console.log(`Test 6: The airport does not allow planes to execute the takeOff method that are not included in the airportPlanes array: ${result}`)

//Clean up 
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

//Test 7: The airport does not allow planes to land which have already landed.
console.log(`================================`)
console.log(`Test 7: The airport does not allow planes to land which have already landed.`)

//Arrange
airport = new Airport();
plane1 = new Plane();
airport.landPlane(plane1);
expected = 1

//Act
airport.landPlane(plane1);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 7: The airport does not allow planes to land which have already landed. ${result}`);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

//Test 8: The airport does not allow planes to take Off if they have not landed at that specific airport.
console.log(`===============================`)
console.log(`Test 8: The airport does not allow planes to use the take Off method for a specific airport if they have not Landed at that specific airport.`)

//Arrange 
airport = new Airport(1);
plane1 = new Plane;
plane2 = new Plane;
airport.landPlane(plane1)
expected = "This plane is not at the airport"


//Act
airport.takeOff(plane1);
actual = airport.takeOff(plane2);
    

//Assert
result = assertEquals(expected, actual)
console.log(`Test 8: The airport does not allow planes to use the take Off method for a specific airport if they have not Landed at that specific airport: ${result}`)


//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined; 

// Tests completed.

