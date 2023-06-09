const { assertEquals } = require("./test-framework");
const airport = require("../src/airport");

let input, expected, actual, result;

console.log(`Test 1 - When a plane is landed in the airport using landNewPlane, array landedPlanes will increase in length to one.`);
console.log(`----------------------------------------------------`);
console.log(``);

//arrange
expected = 1
plane = { id: `voyager` };

//act
airport.landNewPlane(plane);
actual = airport.landedPlanes.length

//assert
result = assertEquals(actual, expected);

//report
console.log(`Test 1 - One plane landed in airport: ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);

expected = undefined;
actual = undefined;