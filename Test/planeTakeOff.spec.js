const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

let input, expected, actual, result;

console.log('Plane Take Off Tests');
console.log('----------------------------------');

// Setup by adding plane initially to make airport list array have length of 1. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1. 

//arrange

expected = 0;
plane = new Plane('A1');
airport = new Airport();


//act

airport.instructToLand(plane);
airport.instructToTakeOff(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 1 - Array size is 0 after plane has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;