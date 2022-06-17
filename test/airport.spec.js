const Airport = require("../src/airport");
const { assertEquals } = require("./test-framework");

//User story 1
// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane


//Arrange
//Test 1 - I want to land a plane and added it to the listOfPlanes in the Airport and log its name
console.log(`==== test 1 ====`);
let testName = `Test 1 - land a plane`;
let input = `a-123`;
let expectedOutput = `a-123`;

//Act
let testAirport = new Airport();
let actualOutput = testAirport.land(input)

//Assert

let result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);



//User story 2
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

//Arrange
//Test 2 - I want to add a capacity for Airport
console.log(`==== test 2 ====`);
testName = `Test 2 - add a capacity`;
expectedOutput = 10;

//Act
testAirport = new Airport(10);
actualOutput = testAirport.capacity;

//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//User story 3
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full

//Arrange
//Test 3 - I want to prevent landing of a plane if the airport is full

console.log(`===Test 3 - prevent landing of a plane if airport is full===`)
testName = `Test 3 - prevent landing if capacity at full`;
expectedOutput = true;

//Act
testAirport = new Airport(1);
testAirport.land(`a-234`)
actualOutput = testAirport.isFull();

//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Test 4 - I want to prevent landing of a plane if the airport is full

console.log(`===Test 4 - prevent landing of a plane if airport is full===`)
testName = `Test 4 - prevent landing if capacity at full when 2 planes are trying to land`;
expectedOutput = `Airport is full`;

//Act
testAirport = new Airport(1);
testAirport.land(`a-234`)
actualOutput = testAirport.land(`a-235`)


//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport


//Arrange
//Test 5 - Instruct the plane to take off and remove it from the airport list of current planes
console.log(`=== Test 5 - instruct a plane to take off and remove it from the airport list of current planes ===`)



//Act

testAirport = new Airport(1);
testAirport.land(`a-236`);
expectedOutput = testAirport.listOfPlanes.length - 1;
testAirport.takeOff();
actualOutput = testAirport.listOfPlanes.length;

//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


