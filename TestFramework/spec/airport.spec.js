const assertEquals = require('../../test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let plane, airport;
let expectedResult, actualResult, result;

console.log('\nTest 1: Instruct the airport to land a plane');

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
expectedResult = 'British Airways airport capacity is now 296.';

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
expectedResult = 'Ryanair airport has received the request to let the Boeing 737-800 plane take off\nThe plane has left the airport.';

//Execute
plane = new Plane('Boeing 737-800', 'Copenhagen', false, true, true);
airport = new Airport('Ryanair', false);
actualResult = airport.takenOff(plane);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);

//-----------------------------------------------------------------------

console.log('\nTest 5: Disable take off requests for planes that are not at the airport');

//Set up
expectedResult = 'Airbus A330-200 is not present at the airport therefore a take off request to Tenerife cannot be sent.';

//Execute
plane = new Plane('Airbus A330-200', 'Tenerife', false, false, true);
airport = new Airport('Jet2', false);
actualResult = airport.takenOff(plane);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);

//-----------------------------------------------------------------------

console.log('\nTest 6: Request to land a plane that has already landed');

//Set up
expectedResult = 'Boeing 737-300 has already landed therefore the request to land it has been denied.';

//Execute
plane = new Plane('Boeing 737-300', 'Naples', false, true, true);
airport = new Airport('Jet2', false);
actualResult = airport.land(plane);

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);

