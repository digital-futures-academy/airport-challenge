const { assertEquals } = require('../test-framework');
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`)

let expected, actual, result, airport, plane;
 
/* User Story 1
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

Objects     Properties	        Messages            Outputs
Plane	    id @str
            destination @str
Airport     id @str	            landPLane(@Plane)	@str
            planesLanded @Array[@Plane]

Initial thoughts:

1. I need an airport to land a plane
2. I need to be able to send a message to tell the airport to allow a plane to land
3. I need to tell it which plane is landing
*/

// Test 1 - planesLanded length increases to 1 when an empty airport is told to land a plane
console.log(`==========`);
console.log(`planesLanded length increases to 1 when an airport is told to land a plane`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act 
airport.landPlane(plane);
actual = airport.planesLanded.length;
console.log(actual);

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Tell an airport to land a plane: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 2 - Only allow object of type "Plane" to land
console.log(`==========`);
console.log(`Test 2 - Only allow object of type "Plane" to land`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 0;

// Act 
airport.landPlane('notAPlane');
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2 - Only allow object of type "Plane" to land: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;

// Test 3 - Edge Case - Falsy item is not added
console.log(`==========`);
console.log(`Test 3 - Edge Case - Falsy item is not added`);

// Arrange
airport = new Airport();
plane = null;
expected = 0;

// Act 
airport.landPlane(plane);
actual = airport.planesLanded.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3 - Edge Case - Falsy item is not added: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;