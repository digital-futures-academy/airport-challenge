let assertEquals = require('../../test-framework');
let Airport = require('../src/airport');
let Plane = require('../src/plane');

let plane, airport;
let expectedResult, actualResult, result;

console.log('Test 1: Instruct the airport to land a plane');

//Set up
expectedResult = 'Boeing 777-300 plane has just landed.';

//Execute
plane = new Plane('Boeing 777-300', 'Malaysia', false, true, false);
airport = new Airport('British Airways');
actualResult = airport.land(plane); 

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);

//-----------------------------------------------------------------------

console.log('\nTest 2: Default airport capacity that can be overridden as appropriate');

//Set up
expectedResult = 'British Airways airport capacity is now 296';

//Execute
plane = new Plane('Boeing 777-300', 'Malaysia', false, true, true);
airport = new Airport('British Airways');
actualResult = airport.airportCapacity(296);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);



