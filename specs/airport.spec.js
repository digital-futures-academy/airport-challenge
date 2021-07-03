// Load in the class file
const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");

const assertEquals = require("../testing-framework.js");

let airport, plane, newCapacity;
let planeFlying, planeLanded;

console.log("\x1b[35m","--- Start of Airport Class Tests ---")
// Land() Method Test -------------------
console.log("\x1b[0m","Test to check if a plane can land in an airport");
//Setup 
airport = new Airport();
plane = new Plane('testPlane','flying');
console.log(`The plane name is ${plane.name} with a flying status of ${plane.flyingStatus}`);

console.log(`Created instance of Airport class ${airport instanceof Airport}`);

//Execute
console.log(airport.land(plane));
console.log(airport.planes);

//Verify
console.log(`The length of the planes array is equal to one: ${assertEquals(airport.planes.length, 1)}`);

console.log(`The planes array contains the testPlane ${assertEquals(airport.planes[0].name, 'testPlane')}\n`);
// ---------------------------------------
// Capacity Test -------------------
console.log("Test to check the default capacity has been initialised andchangeCapacity() can overide the number contained in the capacity property");
//Setup 
newCapacity = 10;
airport = new Airport();
console.log(`The default airport capacity is: ${airport.capacity}`);

//Execute
airport.changeCapacity(newCapacity);

//Verify
console.log(`The airport capacity has been overridden to ${airport.capacity}: ${assertEquals(airport.capacity, newCapacity)}\n`);

// ---------------------------------------
// Test for full airport - Land() 
console.log("Testing the full condition on land() method");
//Setup 
airport = new Airport();
plane = new Plane('Ryanair','flying');
newCapacity = 1;
airport.changeCapacity(newCapacity);
console.log(`The current airport capacity is: ${airport.capacity}`);

//Execute (No new methods were added)

//Verify
// Land a plane in an empty Airport
console.log(`Plane can land if airport has capacity: ${assertEquals("The plane has landed.", airport.land(plane))}`)
// Land a plane in a full Airport
console.log(`Plane cannot land if airport is full: ${assertEquals("Sorry, unable to land, the aiport is full.", airport.land(plane))}\n`)

// ---------------------------------------
// Test takeOff() method  
// Subtest 1 -- Planes Array
console.log("Testing the takeOff() method");
//Setup 
airport = new Airport();
plane = new Plane('Qantas','landed');

console.log(`The current airport capacity is: ${airport.capacity}`);
airport.land(plane); 

//Execute (No new methods were added)
airport.takeOff(plane);

//Verify
// Land a plane in an empty Airport
console.log(`The planes array is empty: ${assertEquals(airport.planes.length, 0)}`)

// Subtest 2 -- Confirmation Message
//Setup 
airport = new Airport();
plane1 = new Plane('Delta','flying');
plane2 = new Plane('American', 'landed');

airport.land(plane1);
airport.land(plane2);

//Execute
console.log(airport.takeOff(plane2));

//Execute (No new methods were added)

//Verify
// Land a plane in an empty Airport
console.log(`Correct confirmation message returned: ${assertEquals(airport.takeOff(plane1), "Plane Delta has taken off. There are now 0 planes.")} \n`)

// ---------------------------------------
// Test to check a flying plane can not takeOff()
console.log("Test to check a plane that is flying can not use the takeOff() method")
// Setup
planeFlying = new Plane('Delta','flying'); 
//Execute 
airport.takeOff(planeFlying);
//Verify 
console.log(`Flying planes do not take off: ${assertEquals(airport.takeOff(planeFlying),"The plane, Delta, you are trying to take off is already flying")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length,0)}\n`);

// Test to check a not flying plane can not land() again. 
console.log("Test to check a plane that is landed can not use the land() method")
// Setup
planeLanded = new Plane('American', 'landed');
//Execute 
console.log(planeLanded);

//Verify 
console.log(`Landed planes do not land again: ${assertEquals(airport.land(planeLanded), "The plane, American, you are trying to land has already landed")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 1)}`);

//-------------------------------------
console.log("\x1b[35m","--- End of Airport Class Tests ---");
console.log("\x1b[0m",'');