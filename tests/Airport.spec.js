const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

let expectedOutput;
let input;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()
//USER STORY 1
// Test 1.1
console.log(`*** Check that only Plane types are able to land at the Airport when planeLands ***`);

// Arrange
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 1;
input = plane1;
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
input = undefined;
expectedOutput = undefined;

// Test 1.2
console.log(`***Length of planeAtAirport array at the Airport increases by 1 when planeLands ***`);


// Arrange
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 1;
input = plane1;
actualOutput, result;

// Act
airport1.planeLands(input)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`plane landed: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;


// Test 1.3
console.log(`*** Check that edge cases such as 'null' as a type are unable to land at the airport***`);

// Arrange
airport1 = new Airport()
expectedOutput = 0;
input = null;
actualOutput, result;

// Act
airport1.planeLands(input)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane unable to land: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 1.4
console.log(`***When something that isn't a plane attempts to land at the airport, a message is returned***`);

// Arrange
airport1 = new Airport()
expectedOutput = "Unable to land";
input = null;
actualOutput, result;

// Act
actualOutput = airport1.planeLands(input)

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Message is returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

//USER STORY 2
// Test 2.1
console.log(`*** Check the value returned for default airport capacity ***`);

// Arrange
airport1 = new Airport()
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
input = undefined;
expectedOutput = undefined;

// Test 2.2
console.log(`*** Check the value returned when capacity changed with positive integer ***`);

// Arrange
input = 15
expectedOutput = 15;
actualOutput, result;

// Act
airport1 = new Airport(input)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Capacity changed from default: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 2.3
console.log(`****Return an error message when capacity is inputted as below 0***`);

// Arrange
input = -5
expectedOutput = "Capacity not set, must be a positive integer";
actualOutput, result;

// Act
airport1 = new Airport(input)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 2.4
console.log(`****Return an error message when capacity is inputted as null***`);

// Arrange
input = null
expectedOutput = "Capacity not set, must be a positive integer";
actualOutput, result;

// Act
airport1 = new Airport(input)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 2.5
console.log(`****Return an error message when capacity is inputted as a non-numerical string***`);

// Arrange
input = 'hello'
expectedOutput = "Capacity not set, must be a positive integer";
actualOutput, result;

// Act
airport1 = new Airport(input)
actualOutput = airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

//USER STORY 3
// Test 3.1
console.log(`*** When the length of planesAtAirport and airportCapacity are the same (1), the test returns true***`);

// Arrange
airport1 = new Airport(1)
plane1 = new Plane()
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
input = undefined;
expectedOutput = undefined;

// Test 3.2
console.log(`*** When the length of planesAtAirport and airportCapacity are the same (1), atCapacity returns true***`);

// Arrange
airport1 = new Airport(1)
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
input = undefined;
expectedOutput = undefined;

// Test 3.3
console.log(`*** When the length of planesAtAirport and airportCapacity are different, atCapacity returns false***`);

// Arrange
airport1 = new Airport(1)
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
input = undefined;
expectedOutput = undefined;

// Test 3.4
console.log(`****When atCapacity is true, planeLands returns an error message***`)

// Arrange
airport1 = new Airport(1)
plane1 = new Plane()
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
input = undefined;
expectedOutput = undefined;

// Test 3.5
console.log(`****When atCapacity is true, planeLands doesn't change the length of planesAtAirport array ***`)

// Arrange
airport1 = new Airport(1)
plane1 = new Plane()
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
input = undefined;
expectedOutput = undefined;

// Test 3.6
console.log(`****When atCapacity is false, planeLands increases length of planesAtAirport array by 1 ***`)

// Arrange
airport1 = new Airport(1)
plane1 = new Plane()
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
input = undefined;
expectedOutput = undefined;

//USER STORY 4
// Test 4.1
console.log(`***Length of planesAtAirport array at the Airport decreases by 1 when planeTakesOff***`);

// Arrange
airport1 = new Airport(1)
plane1 = new Plane();
airport1.planesAtAirport = [plane1]
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Length of planesAtAirport decreased: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 4.2
console.log(`***Confirm if plane is in planesAtAirport using isPlaneAtAirport returns true***`);

// Arrange
airport1 = new Airport()
plane1 = new Plane();
airport1.planesAtAirport = [plane1]
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
input = undefined;
expectedOutput = undefined;

// Test 4.3
console.log(`*** Confirm plane is not at planesAtAirport using isPlaneAtAirport returns false***`);

// Arrange
airport1 = new Airport();
plane1 = new Plane();
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
input = undefined;
expectedOutput = undefined;

// Test 4.4
console.log(`***When planeTakesOff is called and isPlaneAtAirport returns true, length of planesAtAirport decreases by 1***`);

// Arrange
airport1 = new Airport();
plane1 = new Plane();
airport1.planesAtAirport = [plane1]
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
input = undefined;
expectedOutput = undefined;

// Test 5.1
console.log(`***When planeTakesOff is called and isPlaneAtAirport returns False, an error message is returned***`);

// Arrange
airport1 = new Airport();
plane1 = new Plane();
expectedOutput = "Plane cannot take off, it is not at the airport";
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
input = undefined;
expectedOutput = undefined;

// Test 5.2
console.log(`***When planeLands is called and isPlaneAtAirport returns True, an error message is returned***`);

// Arrange
airport1 = new Airport();
plane1 = new Plane();
airport1.planesAtAirport = [plane1]
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
input = undefined;
expectedOutput = undefined;

// Test 5.3
console.log(`***When planeLands is called and isPlaneAtAirport returns False, length of planesAtAirport increases by 1***`);

// Arrange
airport1 = new Airport();
plane1 = new Plane();
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
input = undefined;
expectedOutput = undefined;