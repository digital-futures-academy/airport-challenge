const { assertEquals } = require('../test-frameworks');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let expected;
let actual;
let result;
let airport;
let plane;

// **Test 1** - `landedPlanes` length increases by 1 when `landPlane` is called with _instance of `Plane`_

// **Test 2** - `landPlane` should only add `Plane` instances to the `landedPlanes`

// **Test 3** - edge Case - falsy values should not be added to the Airport - not sure this is needed as only a 'Plane' is allowed in anyway? Are Test 2 and 3 the same


// Test 1 - landedPlanes length increases by 1 when landPlane is called on an (empty) airport with an Item
console.log(`============================`);
console.log(`Test 1 - landPlane puts a Plane into the airport`);

// Arrange - this is setting up the variables required for the test
airport = new Airport();
plane = new Plane();
expected = 1;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane);
actual = airport.landedPlanes.length; //should really use a method here getPlaneCount (which I've not created until a later domain model), than checking a property of the array outside??

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane is landed at the airpot: ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// **Test 2** - `landPlane` should only add `Plane` instances to the `landedPlanes`
// same as??
// **Test 3** - edge Case - falsy values should not be added to the Airport - not sure this test is needed as only a 'Plane' is allowed in anyway?


// Test 2/3 - landPlane should only add 'Plane' to 'landedPlanes' and not accept anything else

console.log(`============================`);
console.log(`Test 2/3 - landPlane should only accept 'Plane'`);

// Arrange - this is setting up the variables required for the test
airport = new Airport();
plane = new Plane();
expected = 0;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(4); //tried to land a 'potato' and '4'
actual = airport.landedPlanes.length; //should really use a method here getPlaneCount (which I've not created until a later domain model), than checking a property of the array??

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 2/3 - only a Plane is landed at the airport: ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 4 -  have changed this from original plan, need another step - set defaultLandedCapcity, create an airport with defaultLandedCapacity and check it has been created successfully

console.log(`============================`);
console.log(`Test 4 - 'landedCapacity' will equal default capacity set`);

// Arrange - this is setting up the variables required for the test

defaultLandedCapacity = 200;
airport = new Airport(defaultLandedCapacity);

// Act - this is running the methods to be tested and collecting the actual results
actual = airport.getLandedCapacity();
expected = defaultLandedCapacity;

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 4 - 'landedCapacity' equals default': ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 5 -  set newLandedCapacity

console.log(`============================`);
console.log(`Test 5 - 'newlandedCapacity' will change the landedCapacity from the default`);

// Arrange - this is setting up the variables required for the test

defaultLandedCapacity = 200;
airport = new Airport(defaultLandedCapacity);

// Act - this is running the methods to be tested and collecting the actual results
airport.newLandedCapacity(defaultLandedCapacity + 100);
expected = defaultLandedCapacity + 100;
actual = airport.getLandedCapacity()

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 5 - 'newlandedCapacity' has changed the landedCapacity': ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);




