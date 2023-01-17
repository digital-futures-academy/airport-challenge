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
console.log('2. slotsOccupied array has a default number');

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

//3rd Test
console.log('--------------------');
console.log('3. Overide the number of slots');

//Arrange
airport = new Airport();
plane = new Plane();
expected = 10;

//Act
airport.setLength();
airport.addPlane(plane);
actual = airport.slotsOccupied.length;

//Assert
result = testEqualsGreater(expected, actual) ? 'You have increased the number of slots available' : 'You are still set at the default number of slots';
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;