const { assertEquals } = require('../test-framework.js');

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

// Test 1 - Tell an airport to land a plane
console.log(`==========`);
console.log(`Test 1 - Tell an airport to land a plane`);

// Arrange
airport = new Airport();
expected = 1; 

// Act 
airport.landPlane();
actual = airport.planesLanded.Length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 - Tell an airport to land a plane: ${result}`);

// Clean Up
expected = undefined;
actual = undefined;
result = undefined;
airport = null;
plane = null;