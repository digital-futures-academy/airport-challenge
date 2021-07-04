// Load in the class file
const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");
const AirTrafficController = require("../src/atc");

const assertEquals = require("../testing-framework.js");

let airport, plane, newCapacity;
let planeFlying, planeLanded;

console.log("\x1b[35m","--- Start of Airport Class Tests ---")
// Land() Method Test -------------------
console.log("\x1b[0m","Test to check if a plane can land in an airport");
//Setup 
airport = new Airport('Heathrow');
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
airport = new Airport('Gatwick');
console.log(`The default airport capacity is: ${airport.capacity}`);

//Execute
airport.changeCapacity(newCapacity);

//Verify
console.log(`The airport capacity has been overridden to ${airport.capacity}: ${assertEquals(airport.capacity, newCapacity)}\n`);

// ---------------------------------------
// Test for full airport - Land() 
console.log("Testing the full condition on land() method");
//Setup 
airport = new Airport('Heathrow');
plane1 = new Plane('Ryanair','flying');
plane2 = new Plane('EasyJet', 'flying');

newCapacity = 1;
airport.changeCapacity(newCapacity);
console.log(`The current airport capacity is: ${airport.capacity}`);

//Execute (No new methods were added)

//Verify
// Land a plane in an empty Airport
console.log(`Plane can land if airport has capacity: ${assertEquals("The plane has landed.", airport.land(plane1))}`)
// Land a plane in a full Airport
console.log(`Plane cannot land if airport is full: ${assertEquals("Sorry, unable to land, the aiport is full.", airport.land(plane2))}\n`)

// ---------------------------------------
// Test takeOff() method  
// Subtest 1 -- Planes Array
console.log("Testing the takeOff() method");
console.log("Testing if a plane can take off")
//Setup 
airport = new Airport('Kuala Lumpa');
plane = new Plane('Qantas','flying');
atc = new AirTrafficController();

airport.land(plane);
console.log(atc.queryTakeOff(plane,airport));

console.log(`The current airport capacity is: ${airport.capacity}`);

//Execute (No new methods were added)
airport.takeOff(plane);

//Verify
// Land a plane in an empty Airport
console.log(`The planes array is empty: ${assertEquals(airport.planes.length, 0)} \n`)

// Subtest 2 -- Confirmation Message
console.log("Testing a confirmation message is returned after take off.")
//Setup 
airport = new Airport("Chicago O' Hare");
plane1 = new Plane('Delta','flying');
plane2 = new Plane('American', 'flying');
atc = new AirTrafficController();

airport.land(plane1);
airport.land(plane2);

console.log(atc.queryTakeOff(plane1, airport));

//Execute (No new methods were added)

//Verify
console.log(`Correct confirmation message returned: ${assertEquals(airport.takeOff(plane1), "Plane Delta has taken off. There are now 1 planes.")} \n`)

// 
//-------------------------------------
console.log("\x1b[35m","--- End of Airport Class Tests ---");
console.log("\x1b[0m",'');