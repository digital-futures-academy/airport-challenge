let assertEquals = require('../../test-framework');
let Airport = require('../src/airport');
let Plane = require('../src/plane');

console.log('Test 1: Instruct the airport to land a plane');

//Set up
let expectedResult = 'Boeing 777-300 plane has just landed.';

//Execute
let plane = new Plane('Boeing 777-300', 'Malaysia', false, true, false);
let airport = new Airport('British Airways');
let actualResult = airport.land(plane); 

//Verify
let result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);
