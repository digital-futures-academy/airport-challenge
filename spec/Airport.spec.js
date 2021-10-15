const test = require('../utils/test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

let airport;
let plane;
let weather;

let expectedOutput;
let actualOutput;

// TEST CASES
// Airport
// X Check that planes can land
// X Check that airport is full
// X Check that a full aiport prevents landing
// X Check that planes that take off are removed from currentNoOfPlanes
// Check that planes can only land if they are not at the Airport (planeID)
// Check that planes cannot land if they are at the Airport
// Check that when plane takes off it is no longer at Airport (planeID)
// Check that airport capacity can be overridden
// Check that planes can only take-off if they have already landed
// Check planes can only land if weather is sunny
// Check planes can only take off if weather is sunny
// Check planes can only be counted if landed at airport
// Check planes cannot have the same planeID
// Check planes cannot land at two airports without taking off first
// Check planes cannot take off from two aiports without landing first

// Plane
// Check if plane has landed
// Check if plane has taken off

// Weather
// Check weather status



// TEST 1
test.it('TEST 1: Check that planes can land', () => {
  // arrange
  airport = new Airport();
  plane = new Plane();

  expectedOutput = 1;

  // act

  airport.landPlane(plane);

  // assert

  result = test.assertEquals(airport.currentNoOfPlanes, expectedOutput);
  console.log(`	${result}
`);

});

// TEST 2
test.it('TEST 2: Check airport is full', () => {
  airport = new Airport();
  plane = new Plane(planeID = '002');

  expectedOutput = true;

  airport.landPlane(plane);

  actualOutput = airport.isFull;

  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);
});

// TEST 3
test.it('TEST 3: Check that a full airport prevents landing', () => {
  // ARRANGE
  airport = new Airport();
  plane = new Plane();
  plane2 = new Plane(planeID = '002');

  // landing the first plane so that isFull = true
  airport.landPlane(plane);

  expectedOutput = 1;

  // ACT
  airport.landPlane(plane2);
  actualOutput = airport.currentNoOfPlanes;

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);

});

// TEST 4
test.it('TEST 4: Check that planes can take off, reducing currentNoOfPlanes by 1', () => {

  // ARRANGE
  airport = new Airport(capacity = 1);
  plane = new Plane();

  expectedOutput = 0; // currentNoOfPlanes = 0

  // landing the first plane so it can take off
  airport.landPlane(plane);

  // ACT
  airport.takeOff(plane);

  actualOutput = airport.currentNoOfPlanes;

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);

});

// TEST 5
test.it('TEST 5: Check that planes can only land if they are not at the Airport', () => {

  // ARRANGE
  airport = new Airport(airportName = 'Gatwick', capacity = 2);
  plane1 = new Plane(planeID = '001');
  plane2 = new Plane(planeID = '002');

  expectedOutput = 2;

  // ACT
  // Landing plane1 and plane2 for the first time
  airport.landPlane(plane1.planeID);
  airport.landPlane(plane2.planeID);

  // Trying to land plane2 for a secondTime
  airport.landPlane(plane2.planeID);

  actualOutput = airport.currentNoOfPlanes;

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}`);
});
