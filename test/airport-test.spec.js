const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");
const Plane = require("../src/Airport");

console.log(`________________`);
console.log(`AIRPORT TESTS`);
console.log(`----------------`);
console.log(``);

console.log(`AIRPORT TEST 1`)
console.log(`When a plane is landed in the Airport using landNewPlane, array planesInPort will increase in length to one.`);
console.log(`----------------------------------------------------`);

let airport = new Airport('spacePort', [])
let expected, actual, result;

expected = 1;

airport.landNewPlane(new Plane('Voyager'));
actual = airport.getPlaneNum();

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

airport = new Airport('spacePort', [new Plane('voyager')], 1);

expected = true;

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
console.log(`When isAirportFull is true, landNewPlane does not add a new plane to hangar array.`);
console.log(`----------------------------------------------------`);

airport = new Airport('spacePort', [new Plane('voyager')], 1);

expected = 1;

airport.landNewPlane(new Plane('Jimminy Cricket'));

actual = airport.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 3 - planesInPort array does not increase in length when length is the same as maxCapacity: ${result}`);
console.log(`Test 3 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

// console.log(`AIRPORT TEST 4`)
// console.log(`if plane name exists in the planesInPort array of airport1, findPlane returns 'parked at airport1'`);
// console.log(`----------------------------------------------------`);

// airport = new Airport('Spaceport', ['voyager', 'Enterprise'], 1);

// expected = 'Parked at Spaceport';

// actual = airport.findPlane('voyager');

// result = assertEquals(actual, expected);

// console.log(`Test 4 - findPlane returns 'Parked at Spaceport': ${result}`);
// console.log(`Test 3 status - ${result ? `PASS` : `FAIL`}`);
// console.log(`-----------------------`);
// console.log(``);

// expected = undefined;
// actual = undefined;
// result = undefined;
