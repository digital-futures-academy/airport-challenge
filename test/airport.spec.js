// This file holds all the tests for the implementation of the Airport class.

const test = require('../test-framework.js');
const Airport = require('../src/airport.js');

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

*/
test.it(`1. On calling instructToLand() with a mock plane the mock plane's state changes to 'landed'`, function () {
    airport = new Airport();
    let expectedResult = 'landed';
    const mockPlane = {
        state: '',
        land() {
            mockPlane.state = 'landed';
        }
    }
    airport.instructToLand(mockPlane);
    let actualResult = mockPlane.state;
    test.assertEquals(expectedResult, actualResult);
})