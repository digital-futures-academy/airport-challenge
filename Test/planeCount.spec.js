const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);


// extended criteria:
// Setup by adding 3 planes initially to make airport list array(going to change max capacity to 5).Call method that returns number of planes

//arrange

expected = 3;
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
plane3 = new Plane('C3', true);
airport = new Airport();

//act

airport.setAirportMaxCapacity(5);
airport.instructToLand(plane1);
airport.instructToLand(plane2);
airport.instructToLand(plane3);
actual = airport.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - 3 planes landed so plane count equals 3 ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;