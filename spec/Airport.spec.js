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
// ACCEPTANCE CRITERIA
// X TEST 1 Check the aiport can land the plane
// X TEST 2 + 3 Check that landing cannot happen if the aiport is full
// X TEST 4 Check that a plane can take off and confirm it is no longer at the airport
// TEST 5 Prevent asking planes to take off if they are not at the airport
// TEST 6 Prevent asking planes to land if they are already at the airport
// X TEST 7 Check the default aiport capacity can be overridden

// EXTENDED ACCEPTANCE CRITERIA
// TEST 8 Prevent landing if the weather is stormy
// TEST 9 Prevent take off if weather is stormy
// TEST 10 Check that planes that have landed are at an airport
// TEST 11 Check to count planes correctly

// EDGE CASES
// TEST 12 Check status of plane is correct with its other properties
// TEST 13 Check planes can't take off if the airport is empty

// Airport
// Check that planes only take off if they are at the Airport
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
  weather = new Weather();

  expectedOutput = 1;

  // act

  airport.landPlane(plane, weather);

  // assert

  result = test.assertEquals(airport.currentNoOfPlanes, expectedOutput);
  console.log(`	${result}
`);

});

// TEST 2
test.it('TEST 2: Check airport is full', () => {
  airport = new Airport();
  plane1 = new Plane(planeID = '001');
  plane2 = new Plane(planeID = '002');
  weather = new Weather();

  expectedOutput = true;

  // Landing the first plane to fill up the airport
  // ...It's not a very big airport, okay?
  airport.landPlane(plane1, weather);

  // Landing the second plane
  airport.landPlane(plane2, weather);

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
  weather = new Weather();

  // landing the first plane so that isFull = true
  airport.landPlane(plane, weather);

  expectedOutput = 1;

  // ACT
  airport.landPlane(plane2, weather);
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
  weather = new Weather();

  expectedOutput = 0; // currentNoOfPlanes = 0

  // landing the first plane so it can take off
  airport.landPlane(plane, weather);

  // ACT
  airport.takeOff(plane, weather);

  actualOutput = airport.currentNoOfPlanes;

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);

});

// TEST 5
test.it('TEST 5: Check that planes can only land if they are not at the Airport', () => {

  // ARRANGE
  airport = new Airport(airportName = 'Gatwick', capacity = 3);
  plane1 = new Plane(planeID = '001');
  plane2 = new Plane(planeID = '002');
  weather = new Weather();

  expectedOutput = 'Plane is already at airport';

  // ACT
  // Landing plane1 and plane2 for the first time
  airport.landPlane(plane1, weather);
  airport.landPlane(plane2, weather);

  // Trying to land plane2 for a secondTime
  actualOutput = airport.landPlane(plane2, weather);
  //console.log(actualOutput);

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);
});

test.it('TEST 6: Check planes can only take off if they are at the aiport', () => {

  // ARRANGE
  airport = new Airport(airportName = 'Gatwick', capacity = 4);
  plane1 = new Plane(planeID = '001');
  plane2 = new Plane(planeID = '002');
  weather = new Weather();

  expectedOutput = 'Plane is not at airport';

  // ACT
  airport.landPlane(plane1, weather);

  actualOutput = airport.takeOff(plane2, weather);
  //console.log(actualOutput);

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);

});

// TEST 7
test.it('TEST 7: Check airport cap can be overridden', () => {

  // ARRANGE
  airport = new Airport();
  weather = new Weather();

  expectedOutput = 4;

  // ACT
  airport.capacity = 4;

  actualOutput = airport.capacity;

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);

});

// TEST 8
test.it('TEST 8: Prevent landing if weather is stormy', () => {

  // ARRANGE
  airport = new Airport();
  weather = new Weather();
  plane1 = new Plane();
  weather = new Weather();

  weather.weatherReport = 'stormy';

  expectedOutput = 'Plane cannot land, weather is stormy';

  // ACT
  actualOutput = airport.landPlane(plane1, weather);

  // ASSERT
  test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);
});

// TEST 9
test.it('TEST 9: Prevent take off if weather is stormy', () => {

  // ARRANGE
  airport = new Airport();
  plane1 = new Plane();
  weather = new Weather();

  expectedOutput = 'Plane cannot take off, weather is stormy';

  // ACT

  weather.weatherReport = 'stormy';

  actualOutput = airport.takeOff(plane1, weather);

  // ASSERT

  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
  `);
});

//

// TEST 13
test.it('TEST 13: Check that planes cannot take off if airport is empty', () => {

  // ARRANGE
  airport = new Airport();
  plane1 = new Plane(planeID = '001');
  weather = new Weather();

  expectedOutput = 'Plane cannot take off, airport is empty';

  // ACT
  actualOutput = airport.takeOff(plane1, weather);

  // ASSERT
  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(`	${result}
`);
});
