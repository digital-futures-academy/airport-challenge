const Airport = require("../src/airport");
const { assertEquals } = require("../testing-framework");
const { assertTrue } = require("../testing-framework");



let expected, actual, result;

console.log('Test 1: plane is added to planeAtAirstrip array?  ')
//Arrange
newAirport = new Airport()
plane1 = 'Boeing 237'
expected = 1;

//Act
newAirport.landplane(plane1)
actual = newAirport.planesAtAirstrip.length

//Assert
result = assertEquals(expected, actual)
console.log(`There is currenlty 1 plane on the airstrip: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
expected = undefined;
result = undefined;


console.log('====================================')
console.log('Test 1.5: confirmation message of plane laned?  ')
//Arrange
newAirport = new Airport()
plane1 = 'Boeing 237'
expected = 'Plane has successfully landed at the airstrip';

//Act
actual = newAirport.landplane(plane1)

//Assert
result = assertEquals(expected, actual)
console.log(`Plane has successfully landed: ${result}`)

// Clean up
newAirport = null;
actual = undefined;
actual = undefined;
expected = undefined;
result = undefined;