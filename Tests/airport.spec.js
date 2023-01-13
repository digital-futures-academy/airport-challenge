const { testEquals } = require('./testing-framework');
const Airport = require('../src/airport');
//const Plane = require('../src/plane');

let expected;
let actual;
let result;
//let plane; Got carried away, left in to show progression (I think :D)
let tailNumber;
let airport;

//1st Test
console.log('--------------------');
console.log('1. addTailNumber adds Plane to the Airport');

//Arrange
airport = new Airport();
//plane = new Plane(); Got carried away, left in to show progression (I think :D)
expected = 1;

//Act
airport.addPlane();
actual = airport.slotsOccupied.length;
console.log(airport)

//Assert
result = testEquals(expected, actual) ? 'Yes' : 'No';
console.log(`Airports Occupied slots increased ${result}`);
console.log('--------------------');

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
/*plane = undefined; Got carried away, left in to show progression (I do actually understand why I don't need this now, I have delt with plane in my airport class)*/
airport = undefined;
tailNumber = undefined;