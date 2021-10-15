const Airport = require('../src/airport.js');
const assertEquals = require('../test-framework.js');

let airport;
let planes = new Array();

console.log('Criteria 1: land plane');
//Setup (Arrange)
airport = new Airport(planes);
let expectedOutput = 1;

//Execute (Act)
airport.landPlane('EasyJet');
let actualOutput = airport.planes.length;

//Verify (Assert)
let result = assertEquals(actualOutput, expectedOutput);
console.log(result);
