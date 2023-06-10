const { assertEquals } = require("./testing-framework");
const plane = require("../src/plane");

let actual, result, expected;

console.log(`Test 2`);
console.log(``);

console.log(` Testing if plane is at airport using isAtAirport(plane)`);

expected = true;
actual = plane.isAtAirport(plane);
result = assertEquals(actual, expected);

console.log(`Test 2: Plane has landed at airport ${result}`);
console.log(`Test 2:${result ? `PASS` : `FAIL`}`);
console.log(``);