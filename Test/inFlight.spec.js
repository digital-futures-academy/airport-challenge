const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

console.log('Inflight Tests');
console.log('----------------------------------');

// Create an instance of plane with inFlight as false. Therefore method call is false 

//arrange

expected = false;
plane = new Plane('A1', false);

//act

actual = plane.getInFlight();

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Plane A1 is in flight -  false ?(planes created not in flight) ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Create an instance of plane not in flight. Change variable to be true ( in flight ) Therefore check method call is true 

//arrange

expected = true;
plane = new Plane('A1', false);

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

// Check landing a plane changes in Flight status to false 

//arrange

expected = false;
plane = new Plane('A1', true);
airport = new Airport();

//act

airport.instructToLand(plane);
actual = plane.getInFlight();

//assert

result = assertEquals(actual, expected);
console.log(`Test 3 - Plane A1 is grounded so in flight should be false ? ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Check take off plane changes in Flight status to true 

//arrange

expected = true;
plane = new Plane('A1', true);
airport = new Airport();

//act

airport.instructToLand(plane);
airport.instructToTakeOff2(plane);
actual = plane.getInFlight();

//assert

result = assertEquals(actual, expected);
console.log(`Test 4 - Plane A1 is in the air so in flight should be true ? ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Try land a plane that for some reason has already landed i.e inFlight is false. Situation is being forced

//arrange

expected = 0;
plane = new Plane('A1', false);
airport1 = new Airport('Already Landed');
airport2 = new Airport('Empty')

//act

airport1.instructToLand(plane);
airport2.instructToLand(plane);
actual = airport1.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 5 - Plane is already at airport 1 so cant be asked to land at another - therefore number of planes at airport 2 is 0? ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport1 = undefined;
airport2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;


console.log('----------------------------------');