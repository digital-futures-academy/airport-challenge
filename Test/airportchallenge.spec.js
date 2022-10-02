const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport")


let expectedOutput, actualOutput, result;
let input = [];
let test = ``;
console.log('All testing begins')

//Test 1 - Instruct the airport to land a plane
//arrange
console.log('Start test 1')
test = `Test 1 - Instruct the airport to land a plane`;

let airport1 = new Airport();

input = { id: `Plane1` };
expectedOutput = "1";

//act
airport1.add(input)
actualOutput = airport1.landedPlanes.length
console.log(actualOutput);


//assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`${test}: ${result ? `Pass` : `Fail`}`);
console.log("End test 1")

//cleanup
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test1b: Is it the same item ID?
console.log('Start test 1b')
test = `Test 1b - Is it the same item ID?`;

// Arrange
input = { id: `Plane1` };
expectedOutput = true;

// Act
airport1.add(input);
actualOutput = airport1.checkID(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1b: It's the same input: ${result}`);
console.log("End test 1b")


// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 2: Airport capacity that can be overridden
console.log('Start test 2')
test = `Test 2 - Airport capacity that can be overridden`;

// Arrange
const airport2 = new Airport();
// input = { id: `Plane1` };
airport2.add(input);
airport2.add(input);
airport2.add(input);
airport2.add(input);
airport2.add(input);
expectedOutput = 5;

// Act
actualOutput = airport2.capacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 2: Can Airport capacity be overridden?: ${result}`);
console.log("End test 2")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;

// Test 3: Prevent landing when airport full
console.log('Start test 3')
test = `Test 3 - Prevent landing when airport full`;

// Arrange
const airport3 = new Airport();
airport3.add(input);
airport3.add(input);
airport3.add(input);
airport3.add(input);
airport3.add(input);
expectedOutput = true;

// Act
actualOutput = airport3.isAirportFull();

// Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 3: Airport is full: ${result}`);
console.log("End test 3")

// CleanUp
expectedOutput = undefined;
actualOutput = undefined;
result = undefined;
input = null;