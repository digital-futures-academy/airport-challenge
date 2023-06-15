const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);

// Change capacity of airport from default to greater amount - 2 to 3.

//arrange

airport = new Airport();
expected = 3

//act

airport.setAirportMaxCapacity(3);

actual = airport.getAirportMaxCapacity();

//assert

result = assertEquals(actual, expected);

console.log(`Test 3 - Airport plane list is as expected list ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;