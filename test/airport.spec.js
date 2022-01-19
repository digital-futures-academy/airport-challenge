const assertEquals = require('./test-framework');
const Airport = require('../src/airport');

console.log(`Testing that trying to land plane 'AH574' when not in airspace outputs 'Landing unsuccessful; AH574 cannot be found in airspace.'`);

//1. Arrange
tailNumber = 'AH574';
expectedOutput = 'Landing unsuccessful; AH574 cannot be found in airspace';

//2. Act
airport = new Airport(1, [], []);
actualOutput = airport.land('AH574');

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


console.log(`Testing that landing plane AH574 in a max capacity airport will output 'Landing unsuccessful; Airport is full'`)

//1. Arrange
airportCapacity = 0;
expectedOutput = 'Landing unsuccessful; Airport is full';

//2. Act
airport = new Airport(airportCapacity, ['AH574'], []);
actualOutput = airport.land('AH574')

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

