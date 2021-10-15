const Airport = require('../src/airport.js');
const assertEquals = require('../test-framework.js');

let airport;
let planes = new Array();

console.log('Criteria 1: land plane');
//Setup (Arrange)
airport = new Airport(planes);
let expectedOutput = 1;

//Execute (Act)
let actualOutput = airport.landPlane('EasyJet');

//Verify (Assert)
let result = assertEquals(actualOutput, expectedOutput);
console.log(result);
