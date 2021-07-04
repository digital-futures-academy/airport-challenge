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
airport = new Airport('British Airways', false);
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
airport = new Airport('British Airways', false);
actualResult = airport.airportCapacity(296);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);

//-----------------------------------------------------------------------

console.log('\nTest 3: Prevent landing when the airport is full');

//Set up
expectedResult = 'Ryanair airport is full therefore the plane cannot be landed.';

//Execute
plane = new Plane('Airbus A320', 'Copenhagen', false, true, false);
airport = new Airport('Ryanair', true);
actualResult = airport.land(plane);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);

//-----------------------------------------------------------------------

console.log('\nTest 4: Instruct the airport to let a plane take off and confirm that it has left the airport');

//Set up
expectedResult = 'Ryanair airport has received the request to let the Boeing 737-800 plane take off\nThe plane has left the airport';

//Execute
plane = new Plane('Boeing 737-800', 'Copenhagen', false, true, true);
airport = new Airport('Ryanair', false);
actualResult = airport.takenOff(plane);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);




