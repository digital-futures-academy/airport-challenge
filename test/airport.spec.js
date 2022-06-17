// This file holds all the tests for the implementation of the Airport class.

const test = require('../test-framework.js');
const Airport = require('../src/airport.js');
const { assertEquals, assertTrue } = require('../test-framework.js');

//declare a variable that will hold airport instances for tests.
let airport;


console.log(`'Airport class tests:'`)

/*
Requirement 1 - On calling instructToLand() with a mock plane the mock plane's state changes to 'landed'.

The test logic is:
- initialise a new instance of the Airport class
- set the expectedResult to 'landed'
- create a mockPlane object to simulate a plane without tightly coupling these tests to the plane class. The mockPlane will simulate a real plane by including a land() function and which if successfully called will change the mockPlane's state.
- call airport.instructToLand(mockPlane)
- set the actual result to the mockPlane.state after the call.
- Test outcome with assert.

Update: refactor to remove use of expectedResult and actualResult variables by placing their values into assertEquals.

*/
test.it(`1. On calling instructToLand() with a mock plane the mock plane's state changes to 'landed'`, function () {
    airport = new Airport();
    const mockPlane = {
        state: '',
        land() {
            mockPlane.state = 'landed';
        }
    }
    airport.instructToLand(mockPlane);
    test.assertEquals('landed', mockPlane.state);
})


/**
 Requirement 2 - On calling the Airport constructor without an argument, getCapacity() returns the default capacity.

 Test logic:
 - initialise a new instance of the Airport class with no argument included.
 - set expectedResult to 5.
 - set actualResult to the return of airport.getCapacity()
 - Use assertEquals to compare expectedResult and actualResult.

 As expectedResult and actualResult values are only used in assertEquals they can be placed directly in assertEquals either as number primitive or the function call.
 **/

test.it(`2. On calling the Airport constructor without an argument, getCapacity() returns the default capacity.`, function () {
    airport = new Airport();
    assertEquals(5, airport.getCapacity());
})

//From requirement 1:
test.it(`3. The length of inAiport[] for a newly created Airport is 0.`, function () {
    airport = new Airport();
    assertEquals(0, airport.getInAirport().length);
})

test.it(`4. getInAirport() returns an array`, function () {
    airport = new Airport();
    assertTrue(Array.isArray(airport.getInAirport()));
})

test.it(`5. After calling addToInAirport(mockPlane), inAirport.length has increased by 1.`, function () {
    airport = new Airport();
    const mockPlane = {
        state: '',
        land() {
            mockPlane.state = 'landed';
        }
    }
    let expectedResult = airport.getInAirport().length + 1;
    airport.addToInAirport(mockPlane);
    assertEquals(expectedResult, airport.getInAirport().length);
})