// This file holds all the tests for the implementation of the Airport class.

const test = require('../test-framework.js');
const Airport = require('../src/airport.js');
const { assertEquals, assertTrue } = require('../test-framework.js');

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



test.it(`7. On calling the Airport constructor without an argument, getCapacity() returns the default capacity.`, function () {
    airport = new Airport();
    assertEquals(5, airport.getCapacity());
})
