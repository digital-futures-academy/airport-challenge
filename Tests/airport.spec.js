const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let plane;
//let tailNumber; Got carried away, this is defined and run with in the Airport class
let airport;

//1st Test
console.log('--------------------');
console.log('1. addPlane adds Plane to the Airport slotsOccupied array?');

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.addPlane(plane);
actual = airport.slotsOccupied.length;

//Assert
result = testEquals(expected, actual) ? 'Yes, the Plane has landed at the airport' : 'No, the Plane is still in the sky';
console.log(`Airports Occupied slots increased? ${result}`);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
//tailNumber = undefined; Got carried away, this is defined and run with in the Airport class