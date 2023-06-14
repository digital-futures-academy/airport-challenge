const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");
console.log(`________________________`);
console.log(`AIRPORT CAPACITY TESTS`);
console.log(`------------------------`);

console.log(`CAPACITY TEST 1`);
console.log(`When creating a new class instance of Airport without assigning capacity, airportMaxCapacity is assigned a default value of 3.`);
console.log(`----------------------------------------------------`);

airport = new Airport('spacePort', []);

expected = 3

actual = airport.getMaxCapacity();

result = assertEquals(actual, expected);

console.log(`Test 1 - New instance of airport has default maxCapacity of 3: ${result}`);
console.log(`Test 1 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`CAPACITY TEST 2`);
console.log(`An airport with default maxCapacity returns a new inputted value of maxCapacity when changeCapacity is called. `);
console.log(`----------------------------------------------------`);

airport = new Airport('spacePort', [])

let input = Math.floor((Math.random() * 100) + 1);
expected = input;

airport.changeCapacity(input)
actual = airport.getMaxCapacity();

result = assertEquals(actual, expected);

console.log(`Test 2 - maxCapacity has new value equal to input: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`CAPACITY TEST 3`);
console.log(`When changing an airport maxCapacity, an input that is not a number does not change the maxCapacity`);
console.log(`----------------------------------------------------`);

airport = new Airport('spacePort', [])

expected = 3;

airport.changeCapacity('string')
actual = airport.getMaxCapacity();

result = assertEquals(actual, expected);

console.log(`Test 3 - maxCapacity has default value of 3: ${result}`);
console.log(`Test 3 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

