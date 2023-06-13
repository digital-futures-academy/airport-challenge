const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');


const testingFramework = new TestingFramework;

let actual, expected, result, airport;

console.log('RUNNING TEST SUITE B: FOR CAPACITY AT AIRPORT');
console.log('💻 ~file: airportIncreaseMaxCapacity.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 1B - Can increase the max capacity to 10 when given an int of 5');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
expected = 10;
let valueOfIncrease = 5;

// Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.getMaxAirportCapacity();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:23 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1B - Can increase the max capacity to 10 when given an int of 5: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');


console.log('Test 2B - given a string that can be parsed into an int will still behave as expected');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
expected = 10;
valueOfIncrease = '5';

//Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.getMaxAirportCapacity();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:51 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 2B - Can increase the max capacity to 10 when given an int of 5: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');


console.log('Test 3B - given a string "hello" does not add to maxCapacity');
console.log('========================================================');
console.log('');


// Arrange
airport = new Airport();
expected = 5;
valueOfIncrease = 'hello';


//Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.getMaxAirportCapacity();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:84 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 3B - given a string "hello" does not add to maxCapacity: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');
