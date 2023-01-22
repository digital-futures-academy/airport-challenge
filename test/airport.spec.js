const {assertEquals} = require(`../testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);


let expected, actual, result, airport, plane;



/*Test 1 
planesOnGround length should increase by 1
*/
console.log(`============================================`)
console.log(`Test 1 - planesOnGround should increase by 1`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.planesOnGround(plane);
actual = airport.planesOnGround.length;

//Assert
result = assertEquals(expected, actual);
console.log(`Test 1: planesOnGround should increase by 1 : ${result}`) 

//Clean up
expected, actual, result = undefined;
airport, plane = null;