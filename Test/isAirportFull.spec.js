const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework.js`);

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


