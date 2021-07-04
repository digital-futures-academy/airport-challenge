const assertEquals = require("../testing-framework.js");
const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");
const AirTrafficController = require("../src/atc.js");

let heathrow, gatwick, plane, planeFlying, atc

console.log("\x1b[35m", "--- Start of AirTrafficController Class Tests ---")

//---------------------------------------
// Test to check a flying plane can not takeOff()
console.log("\x1b[0m","Test to check a plane that is flying is ")
// Setup
planeFlying = new Plane('Delta', 'flying');
airport = new Airport('Amsterdam Schipol');
atc = new AirTrafficController();

//console.log(airport);
//console.log(airport.name);
//console.log(airport.planes);

//Execute 
atc.queryTakeOff(planeFlying,airport);

//Verify 
console.log(`Flying planes do not take off: ${assertEquals(atc.queryTakeOff(planeFlying,airport), "The plane, Delta, you are trying to take off is already flying")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 0)}\n`);

// Multiple Airports Tests
console.log("Test to check a plane landed in a another airport can not take off from the current airport")
// Setup
heathrow = new Airport('Heathrow');
gatwick = new Airport('Gatwick');
plane = new Plane('Lufthansa', 'flying');

atc = new AirTrafficController();

heathrow.land(plane);

// console.log(heathrow);
// console.log(gatwick);
// console.log(plane);
// console.log(atc);

//Execute 

//Verify 
console.log("Take off request invalid:" + assertEquals(atc.queryTakeOff(plane, gatwick), `The plane ${plane.name} is not located at ${gatwick.name}, take off request invalid.`));
console.log('')

// Test to check a not flying plane can not land() again. 
console.log("Test to check a plane that is landed can not use the land() method")
// Setup
airport = new Airport('Munich');
plane = new Plane('American', 'flying');
atc = new AirTrafficController();

//Execute 
console.log(atc.queryLanded(plane,airport));
console.log(airport.land(plane));

//Verify 
console.log(`Landed planes do not land again: ${assertEquals(atc.queryLanded(plane,airport), 
    "The plane, American, you are trying to land has has already landed")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 1)}`);
// -------------------------------------

console.log("\x1b[35m", "--- End of AirTrafficController Class Tests ---")
