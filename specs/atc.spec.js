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
console.log(atc.queryLanding(plane,airport));
console.log(airport.land(plane));

//Verify 
console.log(`Landed planes do not land again: ${assertEquals(atc.queryLanding(plane,airport), 
    "The plane, American, you are trying to land has has already landed")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 1)}`);
// -------------------------------------
console.log('')
console.log("Weather Conditions Tests")
console.log('Test no take off permitted in stormy weather')
// Setup
airport = new Airport('Munich');
plane = new Plane('American', 'flying');
atc = new AirTrafficController();
let weather = 'fine'

console.log(atc.queryLanding(plane, airport));
console.log(airport.land(plane));

//Execute 
weather = 'stormy'
console.log(airport.takeOff(plane));

//Verify 
console.log(`Planes can not take off in stormy weather: ${assertEquals(atc.queryTakeOff(plane, airport, weather),
    "As the weather is stormy, that operation is not permitted.")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 1)}`);
// -------------------------------------
console.log('')
console.log('Test no landing permitted in stormy weather')
// Setup
airport = new Airport('Charles de Gaulle');
plane = new Plane('Air France', 'flying');
atc = new AirTrafficController();
weather = 'stormy'

//Execute 
console.log(airport.land(plane));

//Verify 
console.log(`Planes can not land in stormy weather: ${assertEquals(atc.queryLanding(plane, airport, weather),
    "As the weather is stormy, that operation is not permitted.")}`);
console.log(`Planes in the airport remained unmodified: ${assertEquals(airport.planes.length, 0)}`);
// -------------------------------------
console.log('')
console.log('Test landing IS permitted in fine weather')
// Setup
airport = new Airport('Charles de Gaulle');
plane = new Plane('Air France', 'flying');
atc = new AirTrafficController();
weather = 'fine'

//Execute 
console.log(atc.queryLanding(plane,airport,weather));

//Verify 
console.log(`Planes can land fine weather: ${assertEquals(airport.land(plane, airport),
    "The plane has landed.")}`);
console.log(`Planes in the airport is equal to one: ${assertEquals(airport.planes.length, 1)}`);
// -------------------------------------

console.log("\x1b[35m", "--- End of AirTrafficController Class Tests ---")
