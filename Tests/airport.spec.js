const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let airport;

//1st Test
console.log('--------------------');
console.log('1. addPlane adds Plane to the Airport slotsOccupied array?');

//Arrange
airport = new Airport();
expected = 1;

//Act
airport.addPlane(new Plane('IAmAPlane'));
actual = airport.slotsOccupied.length;

//Assert
result = testEquals(expected, actual); /*? 'Yes, the Plane has landed at the airport' : 'No, the Plane is still in the sky';*/
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;


