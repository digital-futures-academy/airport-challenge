const assertEquals = require('./test-framework');
const Airport = require('../src/airport');

console.log(`Testing that trying to land plane 'AH574' when not in airspace outputs 'Landing unsuccessful; AH574 cannot be found in airspace.'`);

//1. Arrange
tailNumber = 'AH574';
airspace = []
capacity = 1
airplanesAtAirport = []
expectedOutput = 'Landing unsuccessful; AH574 cannot be found in airspace';

//2. Act
airport = new Airport(capacity, airspace, airplanesAtAirport);
actualOutput = airport.land(tailNumber);

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


console.log(`Testing that landing plane AH574 in a max capacity airport will output 'Landing unsuccessful; Airport is full'`)

//1. Arrange
tailNumber = 'AH574'
airspace = ['AH574']
airportCapacity = 0;
airplanesAtAirport = []
expectedOutput = 'Landing unsuccessful; Airport is full';

//2. Act
airport = new Airport(airportCapacity, airspace, []);
actualOutput = airport.land(tailNumber)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that landing 'AH574' outputs 'Landing successful; AH574 has arrived at airport'`);

//1. Arrange

tailNumber = 'AH574';
airspace = ['AH574']
airportCapacity = 1;
airplanesAtAirport = []
expectedOutput = 'Landing successful; AH574 has arrived at airport';

//2. Act
airport = new Airport(airportCapacity, [tailNumber], []);
actualOutput = airport.land(tailNumber);

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that array of airplanes at airport updates to include 'AH574' after its successful land`);

//1. Arrange
tailNumber = 'AH574';
airspace = ['AH574']
airportCapacity = 1;
airplanesAtAirport = []
expectedOutput = true

//2. Act
airport = new Airport(airportCapacity, [tailNumber], []);
airport.land(tailNumber);
actualOutput = airport.airplanes.includes(tailNumber)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that array of airplanes in airspace updates to remove 'AH574' after its successful land`);

//1. Arrange
tailNumber = 'AH574';
airspace = ['AH574']
airportCapacity = 1;
airplanesAtAirport = []
expectedOutput = false

//2. Act
airport = new Airport(airportCapacity, [tailNumber], []);
airport.land(tailNumber);
actualOutput = airport.airspace.includes(tailNumber)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);







