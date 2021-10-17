const assertEquals = require('../src/test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');


let plane;
let airport = [];
let expectedOutput, result, actualOutput;
let numOfPlanes = [];
let airportCapacity = 3;
let planeId;
let planeStatus;
let planesInAirport = [];



// Test 1 - I want the airport to tell the plane to land when there is less than 3 planes in the airport

// Arrange


airport = new Airport(plane);
plane = new Plane('Plane 1');
numOfPlanes = ['Plane1'];
expectedOutput = 1;
      
      
// Act
actualOutput = airport.planeCanLand(numOfPlanes);


// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(result);
      
 


// Test 2


// Arrange
airport = new Airport(plane);
plane = new Plane('Plane 1', 'Plane2');
numOfPlanes = ['Plane1', 'Plane2'];
expectedOutput = true;
airportCapacity = 2;



// Act

actualOutput = airport.increaseCapacity(airport);



// Assert 
result = assertEquals(expectedOutput, actualOutput);
console.log(result);



// Test 3 - checking the capacity of the airport and if its full


// Arrange
airport = new Airport(plane);
plane = new Plane();
numOfPlanes = ['Plane1', 'Plane2', 'Plane3', 'Plane4', 'Plane5'];
airportCapacity;
expectedOutput = true;

// Act
actualOutput = airport.isAirportFull(numOfPlanes);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(result);




// Test 4 - Once the aeroplane has taken off want to know that it is not int he airport anymore

// Arrange
airport = new Airport(plane);
plane = new Plane();
planeId = ['Plane123', 'Plane234', 'Plane345'];
expectedOutput = ['Plane123', 'Plane234'];

// Act
actualOutput = airport.isPlaneInAirport(planeId);

// Assert 
result = assertEquals(planeId.pop(),expectedOutput);
console.log(result);



// Test 5 - I want to know which planes have landed in the airport and which aren't int he airport to avoid confusion

// Arrange
airport = new Airport(plane);
plane = new Plane();
planeId = ['Plane123', 'Plane234'];
planeStatus;
planesInAirport = ['Plane123', 'Plane234'];
expectedOutput = airport.planesInAirport === airport.planeID;

// Act

actualOutput = airport.whereIsPlane(planesInAirport);


// Assert 
result = assertEquals(expectedOutput, actualOutput);
console.log(result);



/* 
 - I haven't been able to get my tests to pass as I am not sure that I am writing the correct functional code or that my assert equals may not be working.

*/


