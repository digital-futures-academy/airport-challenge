const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);


console.log('Plane At Airport Tests');
console.log('----------------------------------');

// Create an instance of plane and by default planes are not in flight. Therefore method call is false 

//arrange

expected = false;
plane = new Plane('A1');

//act

actual = plane.getInFlight();

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Plane A1 is in flight -  false ?(planes initially start as not in flight)${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;