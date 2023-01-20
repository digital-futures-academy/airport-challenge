const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let airport;

//6th Test
console.log('--------------------');
console.log('6. Only allow a plane to take off if its at the Airport');

//Arrange
airport = new Airport();
airport.addPlane(new Plane('IAmAPlane'));
expected = 0;

//Act
airport.removePlane(new Plane('IAmAPlane'));
actual = airport.slotsOccupied.length;

//Assert
result = testEquals(expected, actual); /*? 'The Plane was at the Airport and has taken off' : 'Plane not listed at airport';*/
console.log(result);
console.log('--------------------');

//7th Test

console.log('--------------------');
console.log('7. Only Land a Plane that is not at the Airport');

//Arrange
airport = new Airport();
airport.addPlane(new Plane('IAmAPlane'));
expected = 1;

//Act
airport.addPlane(new Plane('IAmAPlane'));
actual = airport.slotsOccupied.length;

//Assert
result = testEquals(expected, actual); /*? 'That Plane is already at the Airport' : 'Plane has landed at the Airport'*/
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;

