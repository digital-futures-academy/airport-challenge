const { assertEquals } = require("./testing-framework");
const plane = require("../src/plane");
const airport = require("../src/airport");

let actual, result, expected;
//Test 6
console.log(`==============`);
console.log(`Test 6: if plane is at airport`);

expected = true;
actual = plane.isAtAirport();
result = assertEquals(actual, expected);

console.log(`Test 6: Plane is at airport: ${result}`);
console.log(`Test 6:${result ? `PASS` : `FAIL`}`);
console.log(``);

//Test 7
console.log(`==============`);
console.log(`Test 7: planes already flying cannot take off nor be at an airport`);

expected = false;
actual = plane.isPlaneFlying();
result = assertEquals(actual, expected);

console.log(`Test 7: Flying plane cannot take off nor be at an airport: ${result}`);
console.log(`Test 7: ${result ? `PASS` : `FAIL`}`);
console.log(``);
