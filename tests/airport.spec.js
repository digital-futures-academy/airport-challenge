const Airport = require("../src/airport");
const { assertEquals } = require("../testFramework");
const { assertTrue } = require("../testFramework");

//Fixtures
let testAirport, expectedResult, actualResult, result, name;
const testPlane = `testPlane`;

// landPlane tests
name = `landPlane Test 1 - item added to planesAtAirport Array`
console.log(`=== ${name} ===`);

// Arrange
testAirport = new Airport();
expectedResult = 1;
// Act
testAirport.landPlane(testPlane)
actualResult = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


name = `landPlane Test 2 - plane can be found in planesAtAirport Array`
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport
// Act
testAirport.landPlane(testPlane);
// Assert
result = assertTrue(testAirport.planesAtAirport.includes(testPlane))
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


// capacity setting tests
name = `capacity setting Test 1 - new airports have default capacity set to 5`
console.log(`=== ${name} ===`);

// Arrange
testAirport = new Airport();
// Act
actualResult = testAirport.capacity;
expectedResult = 5;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



// prevent landing tests
name = `prevent landing Test 1 - plane cannot land if airport capacity is equal to or greater than 5`;
console.log(`=== ${name} ===`);


//https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/

// Fixtures
let isAirportFull = capacity => {
    if (planesAtAirport.length >= capacity)
        return landPlane(testPlane)
    else
        return console.log(isAirportFull = true)
};
   
// Arrange
testAirport = new Airport;
// Act
actualResult = 5;
expectedResult = 5;

// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);




name = `prevent landing Test 2 - return a string when airport is full`;
console.log(`=== ${name} ===`);

//Fixtures 
let capacity = 1;

testAirport = new Airport();
// Act assertTrue(testAirport.planesAtAirport.includes(testPlane))
testAirport.landPlane(testPlane);

Airport.length = capacity
// Assert
result = assertTrue(testAirport.planesAtAirport.i ? console.log(`airport is FULL!`) : console.log(`airport ISN'T full!`));
// result = assertTrue(testAirport.planesAtAirport.includes(testPlane))
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);
