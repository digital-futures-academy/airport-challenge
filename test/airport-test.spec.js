const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");

console.log(`________________`);
console.log(`AIRPORT TESTS`);
console.log(`----------------`);
console.log(``);

console.log(`AIRPORT TEST 1`)
console.log(`When a plane is landed in the Airport using landNewPlane, array planesInPort will increase in length to one.`);
console.log(`----------------------------------------------------`);

let airport = new Airport('spacePort', [])
let expected, actual, result;

expected = 1
plane = `voyager`

airport.landNewPlane(plane);
actual = airport.getPlanesInPort().length;

result = assertEquals(actual, expected);

console.log(`Test 1 - One plane landed in Airport: ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;

console.log(`AIRPORT TEST 2`)
console.log(`isAirportFull() returns true when the number of planes in planesInPort array is equal to airport maxCapacity.`);
console.log(`----------------------------------------------------`);

airport = new Airport('spacePort', ['voyager'], 1)

expected = true

actual = airport.isAirportFull();

result = assertEquals(actual, expected);

console.log(`Test 2 - isAirportFull reports if airport is at capacity: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`AIRPORT TEST 3`)
console.log(`When isAirportFull is true, landNewPlane does not add a new plane to planesInPort array.`);
console.log(`----------------------------------------------------`);

airport = new Airport('spacePort', ['voyager'], 1)

expected = 1

airport.landNewPlane('Jimminy Cricket');

actual = airport.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 3 - planesInPort array does not increase in length when length is the same as maxCapacity: ${result}`);
console.log(`Test 3 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;
