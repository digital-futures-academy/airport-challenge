const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result, airport, plane;

console.log('RUNNING TEST FOR CAPACITY AT AIRPORT');
console.log('💻 ~file: airportIncreaseMaxCapacity.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 4 - Can increase the max capacity to 10 when given an int of 5');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
expected = 10;
let valueOfIncrease = 5;

// Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.maxAirportCapacity;
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:23 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 4 - Can increase the max capacity to 10 when given an int of 5: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');


console.log('Test 5 - given a string that can be parsed into an int will still behave as expected');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
expected = 10;
valueOfIncrease = '5';

//Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.maxAirportCapacity;
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:51 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 5 - Can increase the max capacity to 10 when given an int of 5: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');


console.log('Test 6 - given a string "hello" does not add to maxCapacity');
console.log('========================================================');
console.log('');


// Arrange
airport = new Airport();
expected = 5;
valueOfIncrease = 'hello';


//Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.maxAirportCapacity;
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:84 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
console.log(result);

// Report
console.log(`Test 6 - given a string "hello" does not add to maxCapacity: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');
