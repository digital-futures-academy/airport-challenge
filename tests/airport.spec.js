const assertEquals  = require(`../testing_framework.js`);
const Airport = require ("../src/airport.js")
const Plane = require ("../src/plane.js")

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Checks that landPlane instructs airport to land a Plane
console.log(`============================`);
console.log(`Test 1 - Instruct airport to land a plane`); 

// Arrange
airport = new Airport(Plane, 2);
expected = "123, you are free to land, I repeat, you are free to land. Over.";
// Act
plane=new Plane(`123`)
actual = airport.landPlane(plane)
console.log(actual)

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: landPlane instructs plane to land: ${result}`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined; 

// Test 2 - Tests that method landPlane only works with a plane
console.log(`============================`);
console.log(`Test 2 - Tests that method landPlane only works with a plane`);

// Arrange
airport = new Airport(Plane);
expected = "You cannot land"

// Act

actual = airport.landPlane("bird")
// Assert
result = assertEquals(expected, actual);

console.log(`Test 2: Only a plane can be instructed to land: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 3 - Tests that airport capacity can be overriden by a new capacity
console.log(`============================`);
console.log(`Test 3 - Airport capacity can be overriden by a new capacity`);

// Arrange
airport = new Airport(Plane,10);
expected = `The new capacity is 10`

// Act

actual = `The new capacity is ${airport.capacity}`
// Assert
result = assertEquals(expected, actual);

console.log(`Test 3: Airport capacity overriden: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4 - Tests that method landPlane prevents landing when airport is full. Scenario: airport is full with 2 planes.
console.log(`============================`);
console.log(`Test 4: Tests that method landPlane prevents landing when airport is full. Scenario: airport is full with 2 planes.`);

// Arrange
let plane1 =new Plane (`123`)
let plane2 = new Plane (`345`)
airport = new Airport(Plane, 2, [plane1,plane2]);

expected = `You cannot land, Airport is at capacity`
// Act

actual = airport.isAtCapacity()
// Assert
result = assertEquals(expected, actual);

console.log(`Test 4: No landing when airport is full with 2 planes: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;
plane1=null
plane2=null


// Test 5 - Tests that the method takeOff instructs a plane to take off .
console.log(`============================`);
console.log(`Test 5 - Tests that the method takeOff instructs a plane to take off`);

// Arrange

airport = new Airport(Plane);
plane=new Plane(`123`)
expected = `${plane.id}, you can take off`
// Act

actual = airport.takeOff(plane)
// Assert
result = assertEquals(expected, actual);

console.log(`Test 5: Airport instructs plane to take off when takeOff method is called: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;
plane1=null
plane2=null

// Test 6 - If something that is not a plane is trying to take off, instruct it not to take off when takeOff method is called.
console.log(`============================`);
console.log(`Test 6 - If something that is not a plane is trying to take off, instruct it not to`);

// Arrange

airport = new Airport(Plane);
expected = "You cannot take off"
// Act

actual = airport.takeOff("not a plane")
// Assert
result = assertEquals(expected, actual);

console.log(`Test 6: Airport instructs anything that is not a plane not to take off : ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;
plane1=null
plane2=null
// Test 7 - Test that the checkTakeOff method checks that once a plane takes off it is removed from the array airportPlanes.
console.log(`============================`);
console.log(`Test 7 - Once a plane takes off it is removed from the array airportPlanes.`);

// Arrange
plane1= new Plane (`123`)
plane2 = new Plane(`345`)
airport = new Airport(Plane,2,[plane1,plane2]);

expected = `${plane2.id} has successfully taken off`
// Act
airport.takeOff(plane2)
actual = airport.checkTakeOff(plane2)
// Assert
result = assertEquals(expected, actual);

console.log(`Test 7: the checkTakeOff method checks that once a plane takes off it is removed from the array airportPlanes: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;
plane1=null
plane2=null

// Test 8 - If a plane is in the airport, landPlane method does not let it land.
console.log(`============================`);
console.log(`Test 8 - If a plane is in the airport, landPlane method does not let it land`);

// Arrange
plane1= new Plane (`123`)
plane2 = new Plane(`345`)
airport = new Airport(Plane,2,[plane1,plane2]);

expected = `You cannot land`
// Act
actual = airport.landPlane(plane2)
// Assert
result = assertEquals(expected, actual);

console.log(`Test 8: landPlane method does not let land a plane already in the airport: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;
plane1=null
plane2=null


// Test 9 - If a plane is not in the airport, takeOff method does not let it take off.
console.log(`============================`);
console.log(`Test 8 - If a plane is not in the airport, takeOff method does not let it take off.`);

// Arrange
plane1= new Plane (`123`)
plane2 = new Plane(`345`)
airport = new Airport(Plane,2,[plane1]);

expected = `You cannot take off`
// Act
actual = airport.takeOff(plane2)
// Assert
result = assertEquals(expected, actual);

console.log(`Test 9: takeOff method does not let take off a plane not in the airport: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;
plane1=null
plane2=null






