const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')
const Weather = require('../src/Weather')

let expectedOutput;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()
let testWeather = new Weather()

//USER STORY 1
// Test 1.1
console.log(`1.1 Check that Plane types are able to land at the Airport when planeLands:`);

// Arrange
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`is a plane: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 1.2
console.log(`1.2 Length of planeAtAirport array at the Airport increases by 1 when planeLands:`);

// Arrange
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`plane landed: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 1.3
console.log(`1.3 Check that edge cases such as 'null' as a type are unable to land at the airport:`);

// Arrange
airport1 = new Airport()
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeLands(null)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane unable to land: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 1.4
console.log(`1.4 When something that isn't a plane attempts to land at the airport, a message is returned:`);

// Arrange
airport1 = new Airport()
expectedOutput = "Unable to land";
actualOutput, result;

// Act
actualOutput = airport1.planeLands(null)

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Message is returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 1.5
console.log(`1.5 When a new airport instance is created from the Airport class, it contains an airportName property:`);

// Arrange
airport1 = new Airport('Test Airport')
expectedOutput = 'Test Airport';
actualOutput, result;

// Act
actualOutput = airport1.name

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Airport name returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//USER STORY 2
// Test 2.1
console.log(`2.1 Check the value returned for default airport capacity:`);

// Arrange
airport1 = new Airport('Test Airport')
expectedOutput = 10;
actualOutput, result;

// Act
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`correct default capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 2.2
console.log(`2.2 Check the value returned when capacity changed with positive integer:`);

// Arrange
expectedOutput = 15;
actualOutput, result;

// Act
airport1 = new Airport('Test Airport', 15)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Capacity changed from default: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 2.3
console.log(`2.3 Return an error message when capacity is inputted as below 0:`);

// Arrange
expectedOutput = "Capacity not set, must be a positive integer";
actualOutput, result;

// Act
airport1 = new Airport('Test Airport', -5)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 2.4
console.log(`2.4 Return an error message when capacity is inputted as null:`);

// Arrange
expectedOutput = "Capacity not set, must be a positive integer";
actualOutput, result;

// Act
airport1 = new Airport('Test Airport', null)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 2.5
console.log(`2.5 Return an error message when capacity is inputted as a non-numerical string:`);

// Arrange
expectedOutput = "Capacity not set, must be a positive integer";
actualOutput, result;

// Act
airport1 = new Airport('Test Airport', 'hello')
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//USER STORY 3
// Test 3.1
console.log(`3.1 When the length of planesAtAirport and airportCapacity are the same (1), the test returns true:`);

// Arrange
airport1 = new Airport('Test Airport', 1)
plane1 = new Plane('Test Plane')
expectedOutput = true;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length === airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`At capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 3.2
console.log(`3.2 When the length of planesAtAirport and airportCapacity are the same (1), atCapacity returns true:`);

// Arrange
airport1 = new Airport('Test Airport', 1)
expectedOutput = true;
actualOutput, result;

// Act
airport1.planesAtAirport.length = airport1.airportCapacity;
actualOutput = airport1.atCapacity()

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`At capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 3.3
console.log(`3.3 When the length of planesAtAirport and airportCapacity are different, atCapacity returns false:`);

// Arrange
airport1 = new Airport('Test Airport', 1)
expectedOutput = false;
actualOutput, result;

// Act;
actualOutput = airport1.atCapacity()

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Not at capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 3.4
console.log(`3.4 When atCapacity is true, planeLands returns an error message:`)

// Arrange
airport1 = new Airport('Test Airport', 1)
plane1 = new Plane('Test Plane')
expectedOutput = "Unable to land";
actualOutput, result;

// Act
airport1.planesAtAirport.length = airport1.airportCapacity
actualOutput = airport1.planeLands(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message sent: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 3.5
console.log(`3.5 When atCapacity is true, planeLands doesn't change the length of planesAtAirport array:`)

// Arrange
airport1 = new Airport('Test Airport', 1)
plane1 = new Plane('Test Plane')
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planesAtAirport.length = airport1.airportCapacity
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`listOfPlanes is unchanged: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 3.6
console.log(`3.6 When atCapacity is false, planeLands increases length of planesAtAirport array by 1:`)

// Arrange
airport1 = new Airport('Test Airport', 1)
plane1 = new Plane('Test Plane')
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`listOfPlanes increases by 1: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

//USER STORY 4
// Test 4.1
console.log(`4.1 Length of planesAtAirport array at the Airport decreases by 1 when planeTakesOff:`);

// Arrange
airport1 = new Airport('Test Airport', 1)
plane1 = new Plane('Test Plane');
airport1.planesAtAirport = ['Test Plane']
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1);
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Length of planesAtAirport decreased: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 4.2
console.log(`4.2 Confirm if plane is in planesAtAirport using isPlaneAtAirport returns true:`);

// Arrange
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane');
airport1.planesAtAirport = ['Test Plane']
expectedOutput = true;
actualOutput, result;

// Act
actualOutput = airport1.isPlaneAtAirport(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane is at airport: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 4.3
console.log(`4.3 Confirm plane is not at planesAtAirport using isPlaneAtAirport returns false:`);

// Arrange
airport1 = new Airport('Test Airport');
plane1 = new Plane('Test Plane');
expectedOutput = false;
actualOutput, result;

// Act
actualOutput = airport1.isPlaneAtAirport(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane is not at airport: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 4.4
console.log(`4.4 When planeTakesOff is called and isPlaneAtAirport returns true, length of planesAtAirport decreases by 1:`);

// Arrange
airport1 = new Airport('Test Airport');
plane1 = new Plane('Test Plane');
airport1.planesAtAirport = ['Test Plane']
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1);
actualOutput = airport1.planesAtAirport.length

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane takes off: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 5.1
console.log(`5.1 When planeTakesOff is called and isPlaneAtAirport returns False, an error message is returned:`);

// Arrange
airport1 = new Airport('Test Airport');
plane1 = new Plane('Test Plane');
expectedOutput = "Plane cannot take off";
actualOutput, result;

// Act
actualOutput = airport1.planeTakesOff(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 5.2
console.log(`5.2 When planeLands is called and isPlaneAtAirport returns True, an error message is returned:`);

// Arrange
airport1 = new Airport('Test Airport');
plane1 = new Plane('Test Plane');
airport1.planesAtAirport = ['Test Plane']
expectedOutput = "Unable to land";
actualOutput, result;

// Act
actualOutput = airport1.planeLands(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 5.3
console.log(`5.3 When planeLands is called and isPlaneAtAirport returns False, length of planesAtAirport increases by 1:`);

// Arrange
airport1 = new Airport('Test Airport');
plane1 = new Plane('Test Plane');
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane landed: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 6.1
console.log(`6.1 checkWeather returns a random value from possibleWeather (either sunny or stormy):`);

// Arrange
expectedOutput = true;
actualOutput, result;

// Act
actualOutput = testWeather.possibleWeather.includes(testWeather.checkWeather())
console.log(testWeather.checkWeather())

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Weather outputted: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 6.2
console.log(`6.2 checkWeather assigns the returned value to the currentWeather property:`);

// Arrange
expectedOutput = 'string';
actualOutput, result;

// Act
testWeather.checkWeather()
actualOutput = typeof (testWeather.currentWeather)
console.log(testWeather.checkWeather())

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Weather assigned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 6.3
console.log(`6.3 When PlaneTakesOff is called and the weather is stormy, length of planesAtAirport remains the same:`);

// Arrange
let currentWeather = 'stormy'
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane')
airport1.planesAtAirport = ['Test Plane']
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1, currentWeather);
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane did not take off when stormy: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 6.4
console.log(`6.4 When PlaneTakesOff is called and the weather is stormy, an error message is returned:`);

// Arrange
currentWeather = 'stormy'
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane')
airport1.planesAtAirport = ['Test Plane']
expectedOutput = "Plane cannot take off";
actualOutput, result;

// Act
actualOutput = airport1.planeTakesOff(plane1, currentWeather);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 6.5
console.log(`6.5 When PlaneTakesOff is called and the weather is sunny, the length of planesAtAirport decreases by 1:`);

// Arrange
currentWeather = 'sunny'
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane')
airport1.planesAtAirport = ['Test Plane']
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1, currentWeather)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane took off: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 7.1
console.log(`7.1 when planeLands is called and the weather is stormy, the length of planesAtAirport remains the same and the plane doesn't land:`);

// Arrange
currentWeather = 'stormy'
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane')
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeLands(plane1, currentWeather)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane didn't land: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 7.2
console.log(`7.2 when planeLands is called and the weather is stormy, an error message is returned:`);

// Arrange
currentWeather = 'stormy'
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane')
expectedOutput = 'Unable to land';
actualOutput, result;

// Act
actualOutput = airport1.planeLands(plane1, currentWeather);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 7.3
console.log(`7.3 when planeLands is called and the weather is sunny, the length of planesAtAirport increases by 1:`);

// Arrange
currentWeather = 'sunny'
airport1 = new Airport('Test Airport')
plane1 = new Plane('Test Plane')
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeLands(plane1, currentWeather)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 8.1
console.log(`8.1 Plane location returns 'In flight' by default:`);

// Arrange
plane1 = new Plane('Test Plane')
expectedOutput = 'In flight';
actualOutput, result;

// Act
actualOutput = plane1.location;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane in flight: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;

// Test 8.2
console.log(`8.2 planeLocation changes location if plane is in planesAtAirport when an airport is inputted:`);

// Arrange
airport1 = new Airport('TestAirport')
plane1 = new Plane('Test Plane')
airport1.planesAtAirport = ['Test Plane']
expectedOutput = 'TestAirport';
actualOutput, result;

// Act
plane1.planeLocation(airport1)
actualOutput = plane1.location;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane at airport: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
expectedOutput = undefined;