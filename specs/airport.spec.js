const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected, plane;

airport.airportDestination = [];

//console.log(`Test 1 Airport Spec`);
//console.log(``);

//console.log(` Testing if airport was instructed to land the plane using airport.land(plane)`);

expected = true;

result = airport.land(plane);
actual = airport.airportDestination.includes(plane);
result = assertEquals(actual, expected);

//console.log(`Test 1 Airport Spec: plane landed: ${result}`);
//console.log(`Test 1 Airport Spec: ${result ? `PASS` : `FAIL`}`);

//console.log(`Test 2 Airport Spec`);
//console.log(``);
//console.log(`Test default airport capacity`);

airport.airportCapacity = 100;
airport.setCapacity(150);

expected = false;

actual = airport.isAtCapacity();
result = assertEquals(actual, expected);

//console.log(`Test 2 Airport Spec: test Airport capacity: ${result}`);
//console.log(`Test 2 Airport Spec: ${result ? `PASS` : `FAIL`}`);

//console.log(`Test 3 Airport Spec`);
//console.log(``);
//console.log(`Test: Airport is full`);

airport.setCapacity(100);
console.log(`Airport capacity: ${airport.airportCapacity}`);

expected = true;

actual = airport.isFull();
result = assertEquals(actual, expected);
//console.log(`Test 3 Airport Spec: is Airport Full : ${result}`);
//console.log(`Test 3 Airport Spec: ${result ? `PASS` : `FAIL`}`);

console.log(`Test 4 Airport Spec`);
console.log(``);
console.log(`Test:Prevent landing when airport is full`);

expected = false;

actual = airport.preventLand();
result = assertEquals(actual, expected);

console.log(`Test 4 Airport Spec: Prevent landing: ${result}`);
console.log(`Test 4 Airport Spec: ${result ? `PASS` : `FAIL`}`);