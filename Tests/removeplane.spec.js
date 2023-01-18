const Airport = require('../src/airport');
const Plane = require('../src/plane');

const airport = new Airport

console.log(airport.slotsOccupied.length)

/*let expected;
let actual;
let result;
let airport;

//2nd Test
console.log('--------------------');
console.log('5. Plane has left the airport');

//Arrange
airport = new Airport();
plane = new Plane()
expected = airport.addPlane()

//Act
airport.removePlane();
actual = airport.slotsOccupied.length;

//Assert
result = testIncrease(expected, actual) ? 'Plane has landed' : 'Landing rejected as you will exceed default slots';
console.log(result);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;*/