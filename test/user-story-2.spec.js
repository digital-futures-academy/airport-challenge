const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");
console.log(`________________________`);
console.log(`USER STORY 2 TESTS`);
console.log(`------------------------`);

console.log(`US2 TEST 1`);
console.log(`When creating a new class instance of Airport without assigning capacity, airportMaxCapacity is assigned a default value of 3.`);
console.log(`----------------------------------------------------`);

airport = new Airport([]);

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

console.log(`US2 TEST 2`);
console.log(`An airport with default maxCapacity returns a new inputted value of maxCapacity when setCapacity is called. `);
console.log(`----------------------------------------------------`);

airport = new Airport([])

let input = Math.floor((Math.random() * 100) + 1);
expected = input;

airport.changeMaxCapacity(input)
actual = airport.getMaxCapacity();

result = assertEquals(actual, expected);

console.log(`Test 2 - maxCapacity has new value equal to input: ${result}`);
console.log(`Test 2 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

console.log(`US2 TEST 3`);
console.log(`When changing an airport maxCapacity, an input that is not a number does not change the maxCapacity`);
console.log(`----------------------------------------------------`);

airport = new Airport([])

expected = 3;

airport.changeMaxCapacity('string')
actual = airport.getMaxCapacity();

result = assertEquals(actual, expected);

console.log(`Test 3 - maxCapacity has default value of 3: ${result}`);
console.log(`Test 3 status - ${result ? `PASS` : `FAIL`}`);
console.log(`-----------------------`);
console.log(``);

expected = undefined;
actual = undefined;
result = undefined;

