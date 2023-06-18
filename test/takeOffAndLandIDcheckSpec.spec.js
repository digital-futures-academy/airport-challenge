const { assertEquals } = require("./testing-framework.js");
const Airport = require("../src/airport.js");

console.log('User Story 5 - Testing')
console.log('======================')
console.log(' ')

console.log('Test 1')
console.log("Only planes in 'planesInAirport' can take off")
console.log(' ')

//arrange

const takeOffIDAirport = new Airport();
expected = ['p1', 'p2']
expected = JSON.stringify(expected)
//act 
takeOffIDAirport.landPlane('p1')
takeOffIDAirport.landPlane('p2')

takeOffIDAirport.takeoffPlane('p27')

actual = takeOffIDAirport.planesInAirport
actual = JSON.stringify(actual)
//assert
result = assertEquals(actual, expected);

console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')


console.log('Test 2')
console.log("Cannot land a plane that already exist in 'planesInAirport' array")
console.log(' ')


//arrange

const duplicatePlaneAirport = new Airport();
expected = ['plane', 'plane2', 'plane3']
expected = JSON.stringify(expected)
//act
duplicatePlaneAirport.landPlane('plane')
duplicatePlaneAirport.landPlane('plane2')
duplicatePlaneAirport.landPlane('plane3')

duplicatePlaneAirport.landPlane('plane2')  //landing same plane twice

actual = duplicatePlaneAirport.planesInAirport
actual = JSON.stringify(actual)

//assert
result = assertEquals(actual, expected)

console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log('  ')