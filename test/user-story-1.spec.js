const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");
const Plane = require("../src/Plane");

console.log(`________________`);
console.log(`USER STORY 1 TESTS`);
console.log(`----------------`);
console.log(``);

console.log(`US1 TEST 1`)
console.log(`When a plane is landed in the Airport using landNewPlane, array hangar will increase in length to one.`);
console.log(`----------------------------------------------------`);

let airport = new Airport([])
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

