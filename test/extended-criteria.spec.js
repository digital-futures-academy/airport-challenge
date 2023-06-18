const { assertEquals } = require("./test-framework");
const Plane = require("../src/Plane");
const Airport = require("../src/Airport")

console.log(`________________________`);
console.log(`EXTENDED CRITERIA TESTS`);
console.log(`------------------------`);

let expected, actual, result;

console.log(`User Story 6 Test 1`)
console.log(`A new instance of airport is created with default weather 'Clear'. `);
console.log(`----------------------------------------------------`);

let Voyager = new Plane('Voyager');
let Enterprise = new Plane('Enterprise');
let airport1 = new Airport([Voyager, Enterprise]);

expected = 'Clear'

actual = airport1.getWeather();

result = assertEquals(actual, expected);

console.log(`Test 1 - default weather = 'Clear': ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`User Story 6 Test 2`)
console.log(`when weather is changed to stormy, airport.getWeather() returns 'Stormy'`);
console.log(`----------------------------------------------------`);

expected = 'Stormy'

airport1.changeWeather('Stormy');
actual = airport1.getWeather();

result = assertEquals(actual, expected);

console.log(`Test 2 - weather can be set to stormy: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`User Story 6 Test 3`)
console.log(`weather can only be set to 'Clear' or 'Stormy', and cannot be set to an unknown string. `);
console.log(`----------------------------------------------------`);

expected = 'Stormy'

airport1.changeWeather('Balloons');
actual = airport1.getWeather();

result = assertEquals(actual, expected);

console.log(`Test 3 - weather cannot be set to random string: ${result}`);
console.log(`Test 3 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`User Story 6 Test 4`)
console.log(`weather can only be set to 'Clear' or 'Stormy', and cannot be set to a number. `);
console.log(`----------------------------------------------------`);

expected = 'Stormy'

airport1.changeWeather(100);
actual = airport1.getWeather();

result = assertEquals(actual, expected);

console.log(`Test 4 - weather cannot be set to a number: ${result}`);
console.log(`Test 4 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`User Story 6 Test 5`)
console.log(`A plane cannot depart when the weather is set to stormy.`);
console.log(`----------------------------------------------------`);

expected = 2

airport1.departPlane(Enterprise);
actual = airport1.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 5 - array length unchanged when weather is 'stormy': ${result}`);
console.log(`Test 5 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`User Story 6 Test 6`)
console.log(`A plane can depart when weather is set to 'Clear'`);
console.log(`----------------------------------------------------`);

expected = 1

airport1.changeWeather('Clear');
airport1.departPlane(Enterprise);
actual = airport1.getPlaneNum();

result = assertEquals(actual, expected);

console.log(`Test 6 - array length decreased by one: ${result}`);
console.log(`Test 6 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;