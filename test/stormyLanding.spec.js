const { assertEquals } = require("./testingFramework");
const airport = require("../src/airport");
let actualOutput, expectedOutput, result;
const plane = { id: 'JB007' };

//Extended Criteria
// Test 1: Preventing the plane to Land when the weather is stormy
console.log("--------Extended Criteria--------")
console.log("");
console.log("Test 1: Preventing the plane to Land when the weather is stormy");

// Arrange
airport.listOfPlanes.push(plane); // Adding the plane to the airport
airport.isStormy = () => true;
expectedOutput = "Plane Landing failed: Weather is stormy";

// Act
actualOutput = airport.weatherLand(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 1: Preventing Landing in stormy weather: ${result}`);
console.log(`Test 1: ${result ? "PASS" : "FAIL"}`);
console.log("")

// Test 2: If the weather is sunny but the plane is already at the airport

console.log("Test 2: If the weather is sunny but the plane is not at airport");

// Arrange
const planeAtAirport = { id: "MS345" };
airport.listOfPlanes = [planeAtAirport]; // Adding the plane to the airport
airport.isStormy = () => false;

expectedOutput = "Plane is already at the airport, cannot land again";

// Act
actualOutput = airport.weatherLand(planeAtAirport);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 2: If the weather is sunny but the plane is not at airport: ${result}`);
console.log(`Test 2: ${result ? "PASS" : "FAIL"}`);
console.log("")

// Test 3: Allowing the plane to land when the weather is sunny
console.log("Test 3: Allowing the plane to Land when the weather is sunny");

// Arrange
const planeToLand = { id: 'AB455' }
airport.listOfPlanes.push(planeToLand); // Adding the plane to the airport
airport.isStormy = () => false; // Stubbing the isStormy method to always return false (sunny weather)

expectedOutput = "Plane landed successfully";

// Act
actualOutput = airport.weatherLand(plane);

// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test 3: Allowing Landing in sunny weather: ${result}`);
console.log(`Test 3: ${result ? "PASS" : "FAIL"}`);
console.log("");