// This file holds all the tests for the implementation of the Plane class.

const test = require('../test-framework.js');
const Plane = require('../src/plane.js');
const Airport = require('../src/airport.js');
const { assertEquals } = require('../test-framework.js');

//declare a variable that will hold plane instances for tests.
let plane;

console.log('Plane class tests:');

console.log(`Requirement 1 tests`)

test.it(`1. The state of newly created instance of a Plane is a blank string`, function () {
    plane = new Plane();
    test.assertEquals('', plane.getState());
})

test.it(`2. On calling land() a plane's state changes to 'landed'`, function () {
    plane = new Plane();
    plane.land();
    test.assertEquals('landed', plane.getState());
})

test.it(`3. The planeId of a newly created plane without an argument is 'noID'.`, function () {
    plane = new Plane();
    test.assertEquals('noID', plane.getPlaneId());
})

test.it(`4. The planeId of a newly created plane with a planeId is the planeId.`, function () {
    plane = new Plane('plane1');
    test.assertEquals('plane1', plane.getPlaneId());
})

console.log('Requirement 4 tests');

test.it(`1. On calling takeOff() the planes state changes to 'flying'`, function () {
    plane = new Plane();
    plane.takeOff();
    assertEquals('flying', plane.getState());
})