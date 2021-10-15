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
// Check that airport is full and prevent landing
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
  weather = new Weather();
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
  airport = new Airport();
  weather = new Weather();
  plane = new Plane();
});
