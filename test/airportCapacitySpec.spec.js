const { assertEquals } = require("./testing-framework.js");
const Airport = require("../src/airport.js");



console.log('User Story 2 - Testing')
console.log('======================')
console.log(' ')


console.log('Test 1')
console.log("Check that the value for airport capacity can be changed")
console.log(' ')



//arrange
const biggerAirport = new Airport()
expected = 15;   //default capacity = 10 

//act

biggerAirport.adjustAirportCapacity(15)

result = biggerAirport.airportCapacity


// console.log(result)
//assert

result = assertEquals(result, expected)
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')


console.log('Test 2')
console.log("Check that'adjustAirportCapacity' will not accept strings")
console.log(' ')

//arrange
expected = 15;

//act
// testPlane.adjustAirportCapacity(10)
biggerAirport.adjustAirportCapacity('sdfsdf')

result = biggerAirport.airportCapacity



//assert


result = assertEquals(result, expected)
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log('  ')



console.log('Test 3')
console.log("Check that only positive integers can be used in 'adjustAirportCapacity'")
console.log(' ')

//arrange
expected = 15;

//act
// testPlane.adjustAirportCapacity(10)
biggerAirport.adjustAirportCapacity(-5)

result = biggerAirport.airportCapacity



//assert

result = assertEquals(result, expected)
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log('  ')



console.log('Test 4')
console.log("Check that only whole numbers can be used in 'adjustAirportCapacity'")
console.log(' ')

//arrange
expected = 15;

//act
// testPlane.adjustAirportCapacity(10)
biggerAirport.adjustAirportCapacity(4.7)

result = biggerAirport.airportCapacity



//assert

result = assertEquals(result, expected)
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log('  ')
