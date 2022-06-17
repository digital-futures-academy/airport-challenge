// This file holds all the tests for the implementation of the Plane class.

const test = require('../test-framework.js');
const Plane = require('../src/plane.js');

//declare a variable that will hold plane instances for tests.
let plane;

console.log('Plane class tests:');

/*Requirement 1 - Test: The state of newly created instance of a Plane is a blank string.
Intended test logic:
 - declare and initalise a new variable using the class constructor Plane().
 - set the expected result to ''.
 - set the actual result to the returned value of plane.getState().
 - compare the actual and expected results using assertEquals. 

 Update: refactored to move previous separate lines to initialise expected and actual to within the test.assertEquals call. Helps increase code cleanliness.
*/
test.it(`1. The state of newly created instance of a Plane is a blank string`, function () {
    plane = new Plane();
    test.assertEquals('', plane.getState());
})

/*Requirement 1 - Test: On calling land() the plane's state changes to 'landed'.

Intended test logic:
- Assign a new instance of the Plane class to plane. It's state variable should be '' as per previous test.
- set expectedResult to be 'landed';
- call plane.land(). The state variable in the plane should change to 'landed'.
- set the actualResult equal to the return of plane.
- Use assertEquals to compare expectedResult and actualResult.

Update: refactored to remove the lines declaring and initializing values to expectedResult and actualResult as they can be placed directly within assertEquals.
*/

test.it(`2. On calling land() a plane's state changes to 'landed'`, function () {
    plane = new Plane();
    plane.land();
    test.assertEquals('landed', plane.getState());
})

//Requirement 1:

test.it(`3. The planeId of a newly created plane without an argument is 'noID'.`, function () {
    plane = new Plane();
    test.assertEquals('noID', plane.getPlaneId());
})
