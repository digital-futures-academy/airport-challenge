const { assertEquals } = require("./testing-framework.js");
const Airport = require("../src/airport.js");

console.log('User Story 4- Testing')
console.log('======================')
console.log(' ')

console.log('Test 1')
console.log("Check that number of planes in 'planesInAirport'has decreased by 1")
console.log(' ')


//arrange
const removeAirport = new Airport();
expected = 2;

removeAirport.landPlane('plane')
removeAirport.landPlane('plane2')
removeAirport.landPlane('plane3')

//act
removeAirport.takeoffPlane('plane3')

actual = removeAirport.planesInAirport.length
//assert
result = assertEquals(actual, expected);


console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')

console.log('Test 2')
console.log("Check the plane ID's to ensure correct plane took off")
console.log(' ')


//arrange
const removeArrayAirport = new Airport();

expected = ['p1', 'p3', 'p4']
expected = JSON.stringify(expected)

//act
removeArrayAirport.landPlane('p1')
removeArrayAirport.landPlane('p2')
removeArrayAirport.landPlane('p3')
removeArrayAirport.landPlane('p4')

removeArrayAirport.takeoffPlane('p2')

actual = removeArrayAirport.planesInAirport;
actual = JSON.stringify(actual)

//assert
result = assertEquals(actual, expected);

console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log('  ')


console.log('Test 3')
console.log("Plane ID to take off must match ID of an existing plane")
console.log(' ')

//arrange

const IDCheckAirport = new Airport();
expected = ['p1', 'p2']
expected = JSON.stringify(expected)
//act 
IDCheckAirport.landPlane('p1')
IDCheckAirport.landPlane('p2')

IDCheckAirport.takeoffPlane('p27')

actual = IDCheckAirport.planesInAirport
actual = JSON.stringify(actual)
//assert
result = assertEquals(actual, expected);

console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log('  ')
