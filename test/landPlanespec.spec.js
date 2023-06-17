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
const testAirport = new Airport();

expected = 1;


//act
testAirport.landPlane('testPlane');

actual = testAirport.planesInAirport.length;

//assert
result = assertEquals(actual, expected);

console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')




console.log('Test 2')
console.log("'planesInAirport should only accept string as an input")
console.log(' ')


//arrange
const intAirport = new Airport();

expected = 0;



//act

intAirport.landPlane(123)
intAirport.landPlane('     ')

actual = intAirport.planesInAirport.length


//assert
result = assertEquals(actual, expected)



console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log('  ')


console.log('Test 3')
console.log("Check to see if the ID of the planes are added to the array")
console.log(' ')



//arrange
const arrayAirport = new Airport();

expected = ['plane', 'plane2', 'plane3'];
expected = JSON.stringify(expected)

//act
arrayAirport.landPlane('plane');
arrayAirport.landPlane('plane2');
arrayAirport.landPlane('plane3');



actual = arrayAirport.planesInAirport;
actual = JSON.stringify(actual)
//assert
result = assertEquals(actual, expected);


console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log('  ')
