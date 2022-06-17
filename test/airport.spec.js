// This file holds all the tests for the implementation of the Airport class.

const test = require('../test-framework.js');
const Airport = require('../src/airport.js');
const { assertEquals, assertTrue, assertFalse } = require('../test-framework.js');

//declare a variable that will hold airport instances for tests.
let airport;

//Some tests call for a mockPlane object. This function will provide it.
function provideMockPlane() {
    const mockPlane = {
        planeId: 'mockPlane',
        state: '',
        land() {
            mockPlane.state = 'landed';
        }
    }
    return mockPlane;
}


console.log(`Airport class tests:`)

console.log(`Requirement 1 tests`);

test.it(`1. The length of inAiport[] for a newly created Airport is 0.`, function () {
    airport = new Airport();
    assertEquals(0, airport.getInAirport().length);
})

test.it(`2. getInAirport() returns an array`, function () {
    airport = new Airport();
    assertTrue(Array.isArray(airport.getInAirport()));
})

test.it(`3. After calling addToInAirport(mockPlane), inAirport.length has increased by 1.`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    let expectedResult = airport.getInAirport().length + 1;
    airport.addToInAirport(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})

test.it(`4. After calling addToInAirport(mockPlane), the array inAirport[] contains an object with planeId`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    assertEquals(mockPlane.planeId, airport.getInAirport()[0].planeId);
})

test.it(`5. On calling instructToLand() with a mock plane the mock plane's state changes to 'landed'`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.instructToLand(mockPlane);
    test.assertEquals('landed', mockPlane.state);
})

test.it(`6. On calling instructToLand(mockPlane), inAirport.length has ***increased by 1***.`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    const expectedResult = airport.getInAirport().length + 1;
    airport.instructToLand(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})


console.log(`Requirement 2 tests`);

test.it(`1. On calling the Airport constructor without an argument, getCapacity() returns the default capacity.`, function () {
    airport = new Airport();
    assertEquals(5, airport.getCapacity());
})

test.it(`2. On calling theAirport constructor with a capacity, getCapacity() returns the capacity`, function () {
    const capacity = 25;
    airport = new Airport(capacity);
    assertEquals(capacity, airport.getCapacity());
})

test.it(`3. After calling setCapacity(number), getCapacity() returns number`, function () {
    const capacity = 20;
    airport = new Airport();
    airport.setCapacity(capacity);
    assertEquals(capacity, airport.getCapacity());
})

console.log(`Requirement 3 tests`)

test.it(`1. isFull() returns false if inAirport[].length is less than capacity.`, function () {
    airport = new Airport(); // Default - no planes inAirport so should not be full
    assertFalse(airport.isFull());
})

test.it(`2. isFull() returns true if inAirport[].length is equal to capacity.`, function () {
    airport = new Airport(1); // set the  capacity to 1 so we only need to add one mock
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    assertTrue(airport.isFull()); // Should return true.
})

test.it(`3. Calling instructToLand(mock Plane) when the airport is under capacity results in the mock Plane state changing to 'landed'`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.instructToLand(mockPlane);
    assertEquals('landed', mockPlane.state);
})

test.it(`4. Calling instructToLand(mock Plane) when the airport is full results in no change to the mock Plane's state`, function () {
    airport = new Airport(1);
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    airport.instructToLand(mockPlane);
    assertEquals('', mockPlane.state);
})