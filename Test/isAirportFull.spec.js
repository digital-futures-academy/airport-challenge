const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework.js`);
const { Plane } = require(`../src/Plane.js`);

console.log('Airport Full Tests');
console.log('----------------------------------');
// Check if airport is full - land 2 planes and see if isFull returns true (airport capacity is 2 by default).

//arrange

airport = new Airport();


expected = false

//act

actual = airport.isAirportFull();

//assert

result = assertEquals(actual, expected);

console.log(`Test 1 - IsAirportFull returns false by default (0 planes with capacity of 2) ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log('----------------------------------');

// Check if airport is full - land 2 planes and see if isFull returns true (airport capacity is 2 by default).

//arrange

airport = new Airport();
plane1 = new Plane('A1')
plane2 = new Plane('B2')

expected = true

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2);
actual = airport.isAirportFull();

//assert

result = assertEquals(actual, expected);

console.log(`Test 2 - IsAirportFull returns true after two plane landings ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log('----------------------------------');

// Check if airport is full - change max capacity of airport to ensure isFull correctly reflecting change in limit. Change airport to 3 and land 2 planes

//arrange

airport = new Airport();
plane1 = new Plane('A1')
plane2 = new Plane('B2')

expected = false

//act

airport.setAirportMaxCapacity(3)
airport.instructToLand(plane1);
airport.instructToLand(plane2);
actual = airport.isAirportFull();

//assert

result = assertEquals(actual, expected);

console.log(`Test 3 - IsAirportFull returns false after two plane landings as capacity is now 3 ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log('----------------------------------');


