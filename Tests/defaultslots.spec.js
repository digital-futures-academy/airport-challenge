const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');
//const Plane = require('../src/plane');

let expected;
let actual;
let result;
let plane;
//let tailNumber; Got carried away, this is defined and run with in the Airport class
let airport;

//2nd Test
console.log('--------------------');
console.log('2. slotsOccupied array has a default number of 10');

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.slotsOccupied.length;
//airport.checkSlots()
actual = airport.slotsOccupied.length;

//Assert
result = testEquals(expected, actual) ? 'There is a default number of slots available' : 'There is no default value set'
console.log(result)
console.log('--------------------')

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;