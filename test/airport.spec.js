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

console.log(`Testing that overriding capacity with anything other than a integer value outputs error message`)

//1. Arrange
newCapacity = 'Hello';
expectedOutput = 'Error: Airport capacity must be set to an integer';

//2. Act
airport = new Airport();
actualOutput = airport.override(newCapacity)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


console.log(`Testing that overriding capacity with an integer value that is less than the number of planes already in airport outputs error message`)

//1. Arrange
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];
newCapacity = 1;

expectedOutput = 'Error: Airport capacity must be greater than number of planes already in airport';

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
actualOutput = airport.override(newCapacity)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that overriding Airport capacity with integer > airplanesAtAirport outputs success message`)

//1. Arrange
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];
newCapacity = 4;

expectedOutput = `Airport capacity has been successfully overridden to 4`;

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
actualOutput = airport.override(newCapacity)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that overriding capacity successfully updates the airport's capacity property`)

//1. Arrange
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];
newCapacity = 4;

expectedOutput = 4;

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
airport.override(newCapacity)
actualOutput = airport.capacity;

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Instructing a plane to take off when not included in array of airplanes at airport returns error message`)

tailNumber = 'AH574';
capacity = 3;
airplanesAtAirport = ['HE274'];

expectedOutput = 'Error: AH574 is not at airport';

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
actualOutput = airport.takeOff(tailNumber);

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Instructing a plane (that is already at airport) to take off will return success message`)

tailNumber = 'AH574';
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];

expectedOutput = `Take off successful; AH574 is no longer at the airport`;

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
actualOutput = airport.takeOff(tailNumber);

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that, after take off, the plane is removed from the array of planes at airport`)

tailNumber = 'AH574';
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];

expectedOutput = false;

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
airport.takeOff(tailNumber)
actualOutput = airport.airplanes.includes(tailNumber);

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);


console.log(`Testing that, after take off, the plane has been added to the airspace`)

tailNumber = 'AH574';
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];

expectedOutput = true;

//2. Act
airport = new Airport(capacity, [], airplanesAtAirport);
airport.takeOff(tailNumber)
actualOutput = airport.airspace.includes(tailNumber);

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

console.log(`Testing that trying to land a plane that is already at airport will output error message`)

tailNumber = 'AH574';
capacity = 3;
airplanesAtAirport = ['AH574', 'HE274'];
airspace = ['AH574']

expectedOutput = 'Error: AH574 already at airport';

//2. Act
airport = new Airport(capacity, airspace, airplanesAtAirport);
actualOutput = airport.land(tailNumber)

//3. Assert 
result = assertEquals(actualOutput, expectedOutput);
console.log(result);




















