const { assertEquals } = require('./testing-framework');
const airport = require('../src/airport');
const plane = require('../src/plane');

let actual, result, expected;

airport.planeLanded = [];

//Test 1
console.log(`Test 1 Airport Spec`);
console.log(``);

console.log(` Testing if airport was instructed to land the plane)`);

expected = true;
actual = airport.land(plane);
result = assertEquals(actual, expected);

console.log(`Test 1 Airport Spec: plane landed: ${result}`);
console.log(`Test 1 Airport Spec: ${result ? `PASS` : `FAIL`}`);

//Test 2
console.log(`Test 2 Airport Spec`);
console.log(``);
console.log(`Test default airport capacity`);

expected = 150;
airport.setMax(150);
actual = airport.airportCapacity;
result = assertEquals(actual, expected);

console.log(`Test 2 Airport Spec: test Airport capacity: ${result}`);
console.log(`Test 2 Airport Spec: ${result ? `PASS` : `FAIL`}`);

//Test 3
console.log(`Test 3 Airport Spec`);
console.log(``);
console.log(`Test: Airport is full`);

console.log(`Airport capacity: ${airport.airportCapacity}`);

expected = false;
actual = airport.isFull();
result = assertEquals(actual, expected);
console.log(`Test 3 Airport Spec: is Airport Full : ${result}`);
console.log(`Test 3 Airport Spec: ${result ? `PASS` : `FAIL`}`);

//Test 4
console.log(`Test 4 Airport Spec`);
console.log(``);
console.log(`Test: Instruct Airport to let plane take off`);

expected = true;
actual = airport.takeOff(plane);
result = assertEquals(actual, expected);

console.log(`Test 4 Airport Spec: Instruct Airport to let plane takeoff: ${result}`);
console.log(`Test 4 Airport Spec: ${result ? `PASS` : `FAIL`}`);


//Test 5
console.log(`Test 5 Airport Spec`);
console.log(``);
console.log(`Test: Prevent landing when airport is full`);
console.log(`Airport capacity: ${airport.airportCapacity}`);

for (let i = 0; i < airport.airportCapacity; i++) {
    airport.land(plane);
}
expected = false;
actual = airport.land(plane);
result = assertEquals(actual, expected);

console.log(`Test 5 Airport Spec: Prevent landing when airport is full`);
console.log(`Test 5 Airport Spec: ${result ? `PASS` : `FAIL`}`);