const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");
const plane = require("../src/plane");

let actual, result, expected;

airport.planeLanded = [];
//Test 1
console.log(`Test 1: Airport was instructed to land the plane`);

expected = true;
actual = airport.land(plane);
result = assertEquals(actual, expected);

console.log(`Test 1: plane landed: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);

//Test 2
console.log(`==============`);
console.log(`Test 2: Update default airport capacity`);

expected = 4;
airport.updateCapacity(4);
actual = airport.defaultAirportCapacity;
result = assertEquals(actual, expected);

console.log(`Test 2: Airport capacity can be overridden: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);

//Test 3
console.log(`==============`);
console.log(`Test 3: Instruct Airport to let plane take off`);

expected = true;
actual = airport.takeOff(plane);
result = assertEquals(actual, expected);

console.log(`Test 3: Airport can instruct plane to take off: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);

//Test 4
console.log(`==============`);
console.log(`Test 4: Prevent landing when airport is full`);

for (let i = 0; i < airport.defaultAirportCapacity; i++) {
    airport.land(plane);
}
expected = false;
actual = airport.land(plane);
result = assertEquals(actual, expected);

console.log(`Test 4: Plane is prevented from landing because the airport is full: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);

//Test 5
console.log(`=============`);
console.log(`Test 5: Prevent asking the airport to let a plane take off if it is not at the airport`);

expected = true;
actual = airport.takeOff(plane);
result = assertEquals(actual, expected);
console.log(`Test 5: Prevent airport instructing plane to take off when it is not at the airport: ${result}`);
console.log(`Test 5: ${result ? `PASS` : `FAIL`}`);

