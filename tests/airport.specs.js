const { assertEquals } = require(`../testing-framework`);
const Airport = require(`../src/Airport.js`);
const Plane = require("../src/Plane.js");

let expected;
let actual;
let result;
let airport;
let plane;



// Test 1 - Airport Runway list length should increase by 1 when a plane is landed to empty Runway.
console.log(`********************************************************************`);
console.log(`Test 1 - planeLanded puts a plane into the airport runway`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = airport.airportRunway.length+1;

// Act
airport.planeLanded(plane);
actual = airport.airportRunway.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Result: plane is landed to airport runway: ${result}`);

// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

//Test 2 - `addplane` should only add `Plane` instances to the `airportRunway list`

console.log(`Test 2 - addplane should only add Plane instances to the airportRunway list`);

// Arrange
airport = new Airport();
plane = `garbage/birds/vehicles`;
expected = 0;

// Act
airport.planeLanded(plane);
actual = airport.airportRunway.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Only Plane instances added to Runway: ${result}`);

// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

// Test  - 3 falsy value items should not be added
console.log(`************************************************************************`);
console.log(`Test 3 - null/undefined/-0/0 value items should not be added`);
// Arrange
airport = new Airport();
plane = null;
expected = 0;
// Act
airport.planeLanded(plane);
actual = airport.airportRunway.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3: falsy values should not be added: ${result}`);

// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`************************************************************************`);

// Test 4 - Plane should be landed within the default capacity
console.log(`********************************************************************`);
console.log(`Test 4 - for airportCapacity=true the Plane should be landed`);

// Arrange
airport = new Airport();
airport.airportCapacity=true;
plane = new Plane();
expected = airport.airportRunway.length+1;

// Act
airport.planeLanded(plane);
actual = airport.airportRunway.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Result:within the airportCapacity the Plane should be landed: : ${result}`);

// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

// Test 5 - Abort Landing when capacity is 0
console.log(`********************************************************************`);
console.log(`Test 5 - Plane should not be landed if airport capacity is 0`);

// Arrange
airport = new Airport();
airport.airportCapacity=0;
plane = new Plane();
expected = 0;

// Act
airport.planeLanded(plane);
actual = airport.airportRunway.length;


// Assert
result = assertEquals(expected, actual);
console.log(`Result: Plane should not be landed if 0 capacity : ${result}`);

// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

// Test 6 - Abort Landing when Runway is full
console.log(`********************************************************************`);
console.log(`Test 6 - Plane should not be landed if airport capacity is full/maximum `);

// Arrange
airport = new Airport();
airport.airportRunway=airport.maxCapacity;
plane = new Plane();

// Act
actual=airport.isRunwayFull(plane);

// Assert
result = assertFalse = actual
console.log(`Result: Plane should be landed if capacity is full : ${result}`);

// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

// Test 7 - Instruct the plane to takeoff
console.log(`********************************************************************`);
console.log(`Test 7 - The length of runway should come 1 less for taking off of plane  `);

// Arrange
airport = new Airport();
plane = new Plane();
airport.planeLanded(plane);
expected=airport.airportRunway.length-1;

// Act
airport.planeTakingOff(plane);
actual= airport.airportRunway.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Result: Plane taking off is successfull : ${result}`);

// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

// Test 8 - maintain DataLog to store plane's status.
console.log(`*************************************************************************`);
console.log(`Test 8 - extracting information about landing and taking off from planeLanded and planeTakingOff  `);

// Arrange
airport = new Airport();
plane = new Plane();
airport.planeLanded(plane);
airport.planeTakingOff(plane);
expectedLanded=1;
expectedtookOff=0;

// Act
actual=airport.findPlane();

// Assert
result1 = assertEquals(expectedLanded, actual[0]);
result2 = assertEquals(expectedtookOff, actual[1]);
console.log(`Result: 1 for confirmed landing: ${result1}`);
console.log(`Result: 0 for confirmed takeoff :${result2} `);
// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);

// Test 9 - weather will affect landing.
console.log(`********************************************************************`);
console.log(`Test 9- Prevent landing for stormy weather.`);

// Arrange
airport = new Airport();
plane = new Plane();
weather=Math.floor(Math.random() * 10);//will generate random weather for consistency,set 0 for stormy
expected1 =airport.airportRunway.length;
expected2 =airport.airportRunway.length+1;
airport.planeLanded(plane,weather);



// Act and Assert

if (weather===0) {
    console.log('weather is stormy')
    actual=airport.airportRunway.length;
    result = assertEquals(expected1, actual);
    console.log(`Result:Landing is failed for stormy weather : ${result}`);
} 
else  {
    console.log('weather is good for landing')
    actual=airport.airportRunway.length;
   
    result = assertEquals(expected2, actual);
    console.log(`Result:Landing is successful for normal/sunny weather: ${result}`);} 


// Clean up
airport = null; 
plane = null;
expected = undefined;
expected1=undefined;
expected2=undefined;
actual = undefined;
result = undefined;
weather=undefined;
console.log(`************************************************************************`);


// Test 10 - weather will affect take off.
console.log(`********************************************************************`);
console.log(`Test 10- Prevent takeoff for stormy weather!`);

// Arrange
airport = new Airport();
plane = new Plane();
weather=Math.floor(Math.random() * 10);//will generate random weather for consistency,set 0 for stormy
expected1 =airport.airportRunway.length;
airport.planeLanded(plane,weather);
expected2 =airport.airportRunway.length-1;
airport.planeTakingOff(plane,weather);



// Act and Assert

if (weather===0) {
    console.log('weather is stormy')
    actual=airport.airportRunway.length;
    result = assertEquals(expected1, actual);
    console.log(`Result:takeoff is failed for stormy weather : ${result}`);
} 
else  {
    console.log('weather is good for takeoff')
    actual=airport.airportRunway.length;
    result = assertEquals(expected2, actual);
    console.log(`Result:Takeoff is successful for normal weather: ${result}`);} 


// Clean up
airport = null; 
plane = null;
expected = undefined;
expected1=undefined;
expected2=undefined;
actual = undefined;
result = undefined;
weather=undefined;
console.log(`************************************************************************`);

// Test 11 - Total Plane Count.
console.log(`********************************************************************`);
console.log(`Test 11 -Runway length will increase after each landing and is equal to airportplaneCount. `);

// Arrange
airport = new Airport();
plane = new Plane();
plane2 = new Plane();
airport.planeLanded(plane);
airport.planeLanded(plane2);
expected =airport.airportRunway.length; 

// Act
actual=airport.airportplaneCount;
console.log(`Total num of planes at airport=${airport.airportplaneCount}`)
// Assert
result = assertEquals(expected, actual);
console.log(`Result:Runway length and Plane count are equal: ${result}`);

// Clean up
airport = null; 
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
console.log(`************************************************************************`);
