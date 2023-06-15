const { assertEquals } = require("./test-framework");
const Plane = require("../src/Plane");

console.log(`________________________`);
console.log(`PLANE CLASS TESTS`);
console.log(`------------------------`);

let expected, actual, result;

console.log(`PLANE TEST 1`)
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
