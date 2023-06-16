const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

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
console.log(`Test 1 - Plane A1 is in flight -  false ?(planes initially start as not in flight) ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Create an instance of plane and by default planes are not in flight. Change variable to be true ( in flight ) Therefore check method call is true 

//arrange

expected = true;
plane = new Plane('A1');

//act

plane.setInFlight(true);
actual = plane.getInFlight();

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Plane A1 is in flight -  true ?(setter use to change property) ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;


console.log('----------------------------------');