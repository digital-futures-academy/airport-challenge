const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let plane;
//let tailNumber; Got carried away, this is defined and run with in the Airport class
let airport;

//2nd Test
console.log('--------------------');
console.log('2. slotsOccupied array has a default number of strings from Plane that can be changed');

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.slotsAvailable(10)
actule = airport.slotsOccupied.length = 10;

//Assert
result = testEquals(expected, actual) ? 'There is a default value in the slotsOccupied integer' : 'There is no default value set'
console.log(result)
console.log('--------------------')

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;