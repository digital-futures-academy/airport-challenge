const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');

let expected;
let actual;
let result;
let plane;
let airport;

//1st Test
console.log('--------------------');
console.log('1. addTailNumber adds Plane to the Airport');

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.addPlane(tailNumber);
actual = airport.slotsOccupied.length;

//Assert
result = testEquals(expected, actual);
console.log(`Airports Occupied slots increased ${result}`);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;
airport = undefined;