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
        wasLandCalled: false,
        wasTakeOffCalled: false,
        getPlaneId() {
            return mockPlane.planeId;
        },
        isLanded() {
            if (mockPlane.state === 'landed') {
                return true;
            } else {
                return false;
            }
        },
        land() {
            mockPlane.state = 'landed';
            mockPlane.wasLandCalled = true;
        },
        takeOff() {
            mockPlane.state = 'flying';
            mockPlane.wasTakeOffCalled = true;
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

test.it(`7. After calling instructToLand() it returns 'plane landed'`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    assertEquals('plane landed', airport.instructToLand(mockPlane));
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
    airport = new Airport(0); // Setting capacity to ensure airport is full
    const mockPlane = provideMockPlane();
    airport.instructToLand(mockPlane);
    assertEquals('', mockPlane.state);
})

test.it(`5. Calling instructToLand(mock Plane) when the airport is full results in no change to inAirport[].length.`, function () {
    airport = new Airport(0); // Setting capacity to ensure airport is full
    const mockPlane = provideMockPlane();
    const expectedResult = airport.getInAirport().length;
    airport.instructToLand(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})

console.log('Requirement 4 tests');

test.it(`1. removeFromInAirport() changes inAirport[].length by minus 1 when the mockPlane is in inAirport[].`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    const expectedResult = airport.getInAirport().length - 1;
    airport.removeFromInAirport(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})

test.it(`2. removeFromInAirport() returns true if it removes a mockPlane from inAirport[]`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    assertTrue(airport.removeFromInAirport(mockPlane));
})

test.it(`3. removeFromInAirport() does not change the inAirport[].length if the mockPlane is not in the airport.`, function () {
    airport = new Airport();
    const mock1 = provideMockPlane();
    mock1.planeId = 'mock1'; //mock 1 will be added to airport so there is a plane in airport. 
    airport.addToInAirport(mock1);
    expectedResult = airport.getInAirport().length; // expect 1.
    const mock2 = provideMockPlane();
    mock2.planeId = 'mock2'; //set mock2 to have a different id to mock1. When we try to remove this mock from the airport we expect nothing to happen due to the planeId difference.
    airport.removeFromInAirport(mock2);
    assertEquals(expectedResult, airport.getInAirport().length);
})

test.it(`4. removeFromInAirport() returns false if the mockPlane is not inAirport[].`, function () {
    airport = new Airport();
    const mock1 = provideMockPlane();
    mock1.planeId = 'mock1'; //mock 1 will be added to airport so there is a plane in airport. 
    airport.addToInAirport(mock1);
    const mock2 = provideMockPlane();
    mock2.planeId = 'mock2'; //set mock2 to have a different id to mock1. When we try to remove this mock from the airport we expect a return of false.
    assertFalse(airport.removeFromInAirport(mock2));
})

test.it(`5.On calling instructToTakeOff() with a mock Plane object that is in inAirport[] changes the mock objects state to 'flying'`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    airport.instructToTakeOff(mockPlane);
    assertEquals('flying', mockPlane.state);
})

test.it(`6. After calling instructToTakeOff() for a plane in the airport reduces inAirport[].length by 1.`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    expectedResult = airport.getInAirport().length - 1;
    airport.instructToTakeOff(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})

test.it(`7. For a plane in the airport, instructToTakeOff() returns the string 'plane left airport' after completing`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    assertEquals('plane left airport', airport.instructToTakeOff(mockPlane));
})


console.log('Requirement 5 tests:')

test.it(`1.isInAirport(plane) returns false if the plane is NOT in inAirport[]`, function () {
    airport = new Airport()
    const mockPlane = provideMockPlane();
    assertFalse(airport.isInAirport(mockPlane));
})

test.it(`2. isInAirport(plane) returns true if the plane is in inAirport[]`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    airport.addToInAirport(mockPlane);
    assertTrue(airport.isInAirport(mockPlane));
})

test.it(`3. On calling instructToTakeOff() on a plane that is not in the airport results in no call to the plane's takeOff() function.`, function () {
    airport = new Airport()
    const mockPlane = provideMockPlane();
    airport.instructToTakeOff(mockPlane);
    assertFalse(mockPlane.wasTakeOffCalled);
})

test.it(`4. On calling instructToLand() on a plane that is already landed results in no call of the plane's land() function`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    mockPlane.state = 'landed';
    airport.instructToLand(mockPlane);
    assertFalse(mockPlane.wasLandCalled);
})

test.it(`5. On calling instructToLand() on a plane that is already landed results in no change to inAirport[].length`, function () {
    airport = new Airport();
    const mockPlane = provideMockPlane();
    mockPlane.state = 'landed';
    airport.addToInAirport(mockPlane);
    expectedResult = airport.getInAirport().length;
    airport.instructToLand(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})