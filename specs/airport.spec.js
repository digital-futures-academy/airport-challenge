const assertEquals = require('./../test-framework.js');
const Airport = require('./../src/airport.js');
let airport, plane1, actualResult, changableCapacity, plane2, plane3;

// Test1 - Test to see whether a plane can land at an airport
console.log('\nWill the plane land at the airport?');
// Setup

airport = new Airport();
plane1 = 'Boeing 747';

// Execute

actualResult = airport.land(plane1);


// Verify 

console.log(assertEquals(plane1, actualResult));

//-----------------------------------------------------------------------

// Test2 - Test to check whether we can change the airport capacity when desired

console.log('\nCan we change the airport capacity?');
// Setup

changableCapacity = 3;

// Execute 

airport = new Airport(changableCapacity);
actualResult = airport.capacity;

// Verify 

console.log(assertEquals(changableCapacity, actualResult));
console.log(`Capacity is ${actualResult}`);

//-----------------------------------------------------------------------

// Test3 - Test to check whether the airport is full or not

console.log('\nIs the airport full?');
// Setup

changableCapacity = 2;
plane1 = 'FlyBe';
plane2 = 'TUI';
plane3 = 'RyanAir'; 
airport = new Airport(changableCapacity);

// Execute 

airport.land(plane1);
airport.land(plane2);
airport.land(plane3);


actualResult = airport.plane.length;

// Verify 

console.log(assertEquals(changableCapacity, actualResult));
console.log(`Capacity is ${changableCapacity}`);


//-----------------------------------------------------------------------

// Test4 - Test to check whether we can let planes take off from the airport

console.log('\nTest to see whether a plane can take off:')

// Setup

airport = new Airport()
expectedResult = 2;
plane1 = 'FlyBe';
plane2 = 'TUI';
plane3 = 'RyanAir'; 

// Execute

airport.land(plane1);
airport.land(plane2);
airport.land(plane3);
airport.takeOff(plane2);

actualResult = airport.plane.length;

// Verify

console.log(assertEquals(expectedResult, actualResult));

//-----------------------------------------------------------------------

// Test5 - Test to check whether we can confirm a plane is no longer in the airport

console.log('\nTest to see whether a plane can take off:');

// Setup

airport = new Airport();
expectedResult = 2;
plane1 = 'FlyBe';
plane2 = 'TUI';
plane3 = 'RyanAir'; 

// Execute

airport.land(plane1);
airport.land(plane2);
airport.land(plane3);
airport.takeOff(plane2);

actualResult = airport.plane.length;

// Verify

console.log(assertEquals(expectedResult, actualResult));

//-----------------------------------------------------------------------

// Test6 - Test to check whether a plane is prevented from landing if it's already in the airport

console.log('\nTest to see whether a plane is already in the airport:');

// Setup

airport = new Airport();
expectedResult = 0;
plane1 = 'FlyBe';
airport.land(plane1);

// Execute

actualResult = airport.land(plane1);

// Verify

console.log(assertEquals(expectedResult, actualResult));