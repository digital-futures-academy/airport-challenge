const { testIncrease } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let airport;

//4th Test
console.log('--------------------');
console.log('4. Plane cant land if there are no free slots');

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.setLength();
airport.addPlane(new Plane('IAmAPlane'));
actual = airport.slotsOccupied.length;

//Assert
result = testIncrease(expected, actual); /*? 'Plane has landed' : 'Landing rejected as you will exceed default slots';*/
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;