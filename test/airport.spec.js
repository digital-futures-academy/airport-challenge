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