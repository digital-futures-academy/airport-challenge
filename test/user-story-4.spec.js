const { assertEquals } = require("./test-framework");
const Plane = require("../src/Plane");
const Airport = require("../src/Airport")

console.log(`________________________`);
console.log(`USER STORY 4 TESTS`);
console.log(`------------------------`);

let expected, actual, result;

console.log(`US4 TEST 1`)
console.log(`plane id can be retrieved from a new instance of Plane class with getId()`);
console.log(`----------------------------------------------------`);

let plane1 = new Plane('Voyager');

expected = 'Voyager'

actual = plane1.getId();

result = assertEquals(actual, expected);

console.log(`Test 1 - plane 1 returns id of 'Voyager': ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane1 = undefined;

console.log(`US4 Test 2`)
console.log(`plane can be removed from hangar array using departPlane`);
console.log(`----------------------------------------------------`);

let Voyager = new Plane('Voyager')
let airport1 = new Airport([Voyager]);

expected = 0

airport1.departPlane(Voyager);

actual = airport1.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 2 - hangar array is empty after plane departs: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;