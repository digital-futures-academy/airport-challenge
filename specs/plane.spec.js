const { assertEquals } = require('./testing-framework');
const plane = require('../src/plane');

let actual, result, expected;
//Test 1
console.log(`==============`);
console.log(`Test 1 Plane Spec`);
console.log(` Testing if plane is at airport using isAtAirport(plane)`);


expected = true;
actual = plane.isAtAirport();
result = assertEquals(actual, expected);

console.log(`Test 1 Plane Spec: Plane has landed at airport: ${result}`);
console.log(`Test 1 Plane Spec:${result ? `PASS` : `FAIL`}`);
console.log(``);

