const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");

let airport = new Airport('spacePort', [])
let expected, actual, result;

console.log(`Test 1 - When a plane is landed in the Airport using landNewPlane, array planesInPort will increase in length to one.`);
console.log(`----------------------------------------------------`);
console.log(``);

//arrange
expected = 1
plane = `voyager`

//act
airport.landNewPlane(plane);
actual = airport.getPlanesInPort().length;

//assert
result = assertEquals(actual, expected);

console.log(`Test 1 - One plane landed in Airport: ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);

expected = undefined;
actual = undefined;