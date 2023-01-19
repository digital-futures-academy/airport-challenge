const { testIncrease } = require('./testing-framework');
const { testEqualsGreater } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let plane;
let airport;

//2nd Test
console.log('--------------------');
console.log('6. Only allow a plane to take off if its at the Airport');

//Arrange
airport = new Airport();
expected = 1;

//Act
airport.setLength();
actual = airport.slotsOccupied.length;

//Assert
result = testIncrease(expected, actual) ? 'There is a default number of slots available' : 'There is no default value set';
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;