const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");

console.log(`________________`);
console.log(`AIRPORT TESTS`);
console.log(`----------------`);
console.log(``);

let airport = new Airport('spacePort', [])
let expected, actual, result;


console.log(`AIRPORT TEST 1`)
console.log(`When a plane is landed in the Airport using landNewPlane, array planesInPort will increase in length to one.`);
console.log(`----------------------------------------------------`);

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
