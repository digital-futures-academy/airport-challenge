const { testIncrease } = require('./testing-framework');
const { testEqualsGreater } = require('./testing-framework');
const Airport = require('../src/airport');

let expected;
let actual;
let result;
let airport;

//2nd Test
console.log('--------------------');
console.log('4. Plane cant land if there are no free slots');

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.setLength();
airport.addPlane();
actual = airport.slotsOccupied.length;
console.log(actual)
//Assert
result = testIncrease(expected, actual) ? 'Plane has landed' : 'Landing rejected as you will exceed default slots' //the actual remains at the default number of slots (10) and does not increase.
console.log(result)
console.log('--------------------')

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;