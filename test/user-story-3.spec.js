const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");
const Plane = require("../src/Plane");

console.log(`________________`);
console.log(`USER STORY 3 TESTS`);
console.log(`----------------`);
console.log(``);

console.log(`US3 TEST 1`)
console.log(`isAirportFull() returns true when the number of planes in planesInPort array is equal to airport maxCapacity.`);
console.log(`----------------------------------------------------`);

airport = new Airport([new Plane('voyager')], 1);

expected = true;

actual = airport.isAirportFull();

result = assertEquals(actual, expected);

console.log(`Test 1 - isAirportFull reports if airport is at capacity: ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`US3 TEST 2`)
console.log(`When isAirportFull is true, landNewPlane does not add a new plane to hangar array.`);
console.log(`----------------------------------------------------`);

airport = new Airport([new Plane('voyager')], 1);

expected = 1;

airport.landNewPlane(new Plane('Jimminy Cricket'));

actual = airport.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 2 - hangar array does not increase in length when length is the same as maxCapacity: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;