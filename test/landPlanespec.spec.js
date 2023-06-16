const { assertEquals } = require("./testing-framework.js");
const Airport = require("../src/airport.js");

console.log('User Story 1 - Testing')
console.log('======================')
console.log(' ')
console.log('Test 1')
console.log("Check that number of planes in 'planesInAirport'has increased by 1")
console.log(' ')

let input, expected, actual, result;

//arrange
const plane1 = new Airport('plane1');

expected = 1;


//act
plane1.landPlane();

actual = plane1.planesInAirport.length;

//assert
result = assertEquals(actual, expected);

console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')




console.log('Test 2')
console.log("'planesInAirport should only accept string as an input")
console.log(' ')


//arrange
const numPlane = new Airport(1234);
const emptyPlane = new Airport('    ')


expected = 1;



//act

numPlane.landPlane()
emptyPlane.landPlane()

actual = numPlane.planesInAirport.length


//assert
result = assertEquals(actual, expected)

console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log('  ')