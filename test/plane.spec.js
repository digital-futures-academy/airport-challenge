// This file holds all the tests for the implementation of the Plane class.

const test = require('../test-framework.js');
const Plane = require('../src/plane.js');

//declare a variable that will hold plane instances for tests.
let plane;

console.log('Airport class tests:');

/*Requirement 1 - Test: The state of newly created instance of a Plane is a blank string.
Intended test logic:
 - declare and initalise a new variable using the class constructor Plane().
 - set the expected result to ''.
 - set the actual result to the returned value of plane.getState().
 - compare the actual and expected results using assertEquals. 
*/
test.it(`1. The state of newly created instance of a Plane is a blank string`, function () {
    plane = new Plane();
    let expectedResult = '';
    actualResult = plane.getState();
    test.assertEquals(expectedResult, actualResult);
})