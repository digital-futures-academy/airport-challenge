const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../testing-framework");


let expected, actual, result;

console.log('Test 1: plane is added to planeAtAirstrip array?  ')
//Arrange
newAirport = new Airport()
plane1 = new Plane('Boeing 277', newAirport)
expected = 1;

//Act
plane1.clearToLand()
actual = newAirport.planesAtAirstrip.length

//Assert
result = assertEquals(expected, actual)
console.log(`There is currenlty 1 plane on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;

console.log('=========================================')


console.log('Test 2: tests that no more than 3 planes can be added to the planes array  ')
//Arrange
newAirport = new Airport()
plane1 = new Plane('Boeing 277', newAirport)
plane2 = new Plane('Boeing 27', newAirport)
plane3 = new Plane('Boeing 77', newAirport)
plane4 = new Plane('Boeing 7447', newAirport)
expected = 3;

//Act
plane1.clearToLand()
plane2.clearToLand()
plane3.clearToLand()
plane4.clearToLand()
actual = newAirport.planesAtAirstrip.length

//Assert
result = assertEquals(expected, actual)
console.log(`There is currenlty only 3 planes on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;