const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

console.log('Plane At Airport Tests');
console.log('----------------------------------');

// Setup by adding plane initially to make airport list array. Then search for the plane by ID within the airport list. Plane exists so method will return true. 

//arrange

expected = true;
plane = new Plane('A1');
airport = new Airport();

//act

airport.instructToLand(plane);
actual = airport.checkPlaneAtAirport(plane);

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Plane A1 is at the airport ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


console.log('----------------------------------');