const assertEquals = require('../../test-framework');
const Plane = require('../src/plane');

let plane;
let expectedResult, actualResult, result;

console.log('Test: Constructor variables for the Plane class are successfully initalised');

//Set up
expectedResult = 'Boeing 777-300\nMalaysia\nfalse\ntrue\nfalse';

//Execute
plane = new Plane('Boeing 777-300', 'Malaysia', false, true, false);
actualResult = `${plane._name}\n${plane._destination}\n${plane._takenOff}\n${plane._atAirport}\n${plane._landed}`;

//Verify
result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);
