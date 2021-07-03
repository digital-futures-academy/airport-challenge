const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");

let heathrow, gatwick, plane, planeFlying, atc

//---------------------------------------
// Test to check a flying plane can not takeOff()
    console.log("Test to check a plane that is flying is ")
// Setup
planeFlying = new Plane('Delta', 'flying');
airport = new Airport();
atc = new AirTrafficController();

//Execute 
atc.queryTakeOff(planeFlying);

//Verify 
console.log(`Flying planes do not take off: ${assertEquals(atc.queryTakeOff(planeFlying), "The plane, Delta, you are trying to take off is already flying")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 0)}\n`);

// Multiple Airports Tests
console.log("Test to check a plane landed in a another airport can not take off from the current airport")
// Setup
heathrow = new Airport();
gatwick = new Airport();
plane = new Plane('Lufthansa', 'flying');
airport.land(plane);

atc = new AirTrafficController();

//Execute 
atc.queryTakeOff(plane, airport);

//Verify 
console.log(`Flying planes do not take off: ${assertEquals(atc.queryTakeOff(planeFlying), "The plane, Delta, you are trying to take off is already flying")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 0)}\n`);


// Test to check a not flying plane can not land() again. 
console.log("Test to check a plane that is landed can not use the land() method")
// Setup
planeLanded = new Plane('American', 'landed');
//Execute 
console.log(planeLanded);

//Verify 
console.log(`Landed planes do not land again: ${assertEquals(airport.land(planeLanded), "The plane, American, you are trying to land has already landed")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 1)}`);
