const { testDecrease } = require('./testing-framework.js')
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let expected;
let actual;
let result;
let airport;

//2nd Test
console.log('--------------------');
console.log('5. Remove and report Plane has left the airport');

//Arrange
airport = new Airport();
plane = new Plane()
airport.addPlane(plane) //Populate the array with a value of 1
expected = airport.slotsOccupied.length

//Act
airport.removePlane();
actual = airport.slotsOccupied.length;

//Assert
result = testDecrease(expected, actual) ? 'Plane has left the Airport' : 'Plane is still at the Airport';
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;