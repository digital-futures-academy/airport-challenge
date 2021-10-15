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
// X Check that planes can land
// X Check that airport is full
// Check that a full aiport prevents landing
// Check that airport capacity can be overridden
// Check weather status
// Check that when plane takes off it is no longer at Airport
// Check that planes can only land if they are not at the Airport
// Check that planes can only take-off if they have already landed
// Check planes can only land if weather is sunny
// Check planes can only take off if weather is sunny
// Check planes can only be counted if landed at airport

// TEST 1
test.it('Check that planes can land', () => {
  // arrange
  airport = new Airport();
  plane = new Plane();

  expectedOutput = 1;

  // act

  airport.landPlane(plane);

  // assert

  result = test.assertEquals(airport.currentNoOfPlanes, expectedOutput);
  console.log(result);

});

// TEST 2
test.it('Check airport is full', () => {
  airport = new Airport(capacity = 1);
  plane = new Plane();

  expectedOutput = true;

  airport.landPlane(plane);

  actualOutput = airport.isFull;

  result = test.assertEquals(expectedOutput, actualOutput);
  console.log(result);
});

// TEST 3
test.it('Check that a full airport prevents landing', () => {
  // ARRANGE
  airport = new Airport();
  plane = new Plane();

  expectedOutput = 'Plane cannot land';

  // ACT

  // ASSERT

});
