const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");
const { assertEquals } = require("../framework/testingFramework.js")


// Declare variables
let expected;
let actual;
let result;
let airport;
let plane, plane1, plane2, plane3;
let newCapacity;

// Test 1 - Does the plane land in the airport?
console.log(`=============================`)
console.log(`Test 1 - Does a plane land in the airport?`)

//Arrange
airport = new Airport(['LDN001'], 5);
plane1 = new Plane('LDN001');
plane2 = new Plane('BEJ002');
expected = 2;

//Act
airport.landPlane('BEJ002');
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1 - A plane is added to the planesAtAirport array: ${result}`);

//Cleanup
airport = null;
plane1 = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Can default capacity be overwritten?
console.log(`=============================`)
console.log(`Test 2 - Can capacity be changed from default to 10?`)

//Arrange
airport = new Airport();
defaultCapacity = airport.capacity;
newCapacity = 10
expected = 10;

//Act
airport.setCapacity(10);
actual = airport.capacity;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2 - Default capacity is ${defaultCapacity} which can be overwritten to ${newCapacity}: ${result}`);

//Cleanup
airport = null;
plane = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3 - Cannot add plane when airport is full
console.log(`=============================`)
console.log(`Test 3 - Plane cannot be added when airport is full`)

//Arrange
airport = new Airport(['LDN001', 'BEJ002'], 2);
plane1 = new Plane('LDN001');
plane2 = new Plane('BEJ002');
plane3 = new Plane('WSH003');
expected = "Sorry, airport is full";

//Act
airport.landPlane('WSH003');
actual = airport.isFull();

//Assert
result = assertEquals(actual, expected)
console.log(`Test 3: ${result}`);

//Cleanup
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4a - Is a plane taken off from array?
console.log(`=============================`)
console.log(`Test 4a - Plane is taken off when takeOffPlane function is called`)

//Arrange
airport = new Airport(['LDN001'], 5);
plane1 = new Plane('LDN001');
expected = 0;

//Act
airport.takeOffPlane('LDN001');
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 4a: ${result}`);

//Cleanup
airport = null;
plane1 = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4b - Can we confirm when plane is taken off from airport?
console.log(`=============================`)
console.log(`Test 4b - Is a string passed when a plane takes off from the airport`)

//Arrange
airport = new Airport(['LDN001'], 5);
plane1 = new Plane('LDN001');
expected = "Plane has taken off & no longer in the airport";

//Act
actual = airport.takeOffPlane('LDN001');

//Assert
result = assertEquals(actual, expected);
console.log(`Test 4b: ${result}`);

//Cleanup
airport = null;
plane1 = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5a - Prevent plane from taking off if it is not at the airport
console.log(`=============================`)
console.log(`Test 5a - Plane cannot take off if it is not at the planesAtAirport array`)

//Arrange
airport = new Airport(['LDN001', 'WSH003'], 5);
plane1 = new Plane('LDN001');
plane2 = new Plane('BEJ002');
plane3 = new Plane('WSH003');
expected = 2;

//Act
airport.takeOffPlane('BEJ002')
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 5a: ${result}`);

//Cleanup
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5b - Prevent plane from landing if plane is already landed
console.log(`=============================`)
console.log(`Test 5b - Prevent plane from landing when plane is already in the planesAtAirport array`)

//Arrange
airport = new Airport(['LDN001', 'BEJ002', 'WSH003'], 5);
plane1 = new Plane('LDN001');
plane2 = new Plane('BEJ002');
plane3 = new Plane('WSH003');
expected = 3;

//Act
airport.landPlane('LDN001');
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 5b: ${result}`);

//Cleanup
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
expected = undefined;
actual = undefined;
result = undefined;