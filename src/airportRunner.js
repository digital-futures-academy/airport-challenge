// Code to run different commands within the airport class

const Airport = require(`./airport.js`);
const Plane = require("./plane.js");

//* create different instances of airport
const LHR = new Airport();
const AMS = new Airport();
const GLA = new Airport();
const SAN = new Airport(); //? add airportID?

//* create different instances of plane
const boeing = new Plane('Boeing');
const concord = new Plane('Concord');
const airbus = new Plane('Airbus');
const private = new Plane('Private');
const douglas = 'douglas'; // not an instance of Plane :O

//* change airport capacity
GLA.changeAirportCapacity(3);
AMS.changeAirportCapacity(1);
LHR.changeAirportCapacity(-10); // error [negative number, wont change capacity]
console.log(LHR.getAirportCapacity()); // show last command did not change airport capacity
console.log(GLA.getAirportCapacity()); // show line 20 changed the capacity of the airport
console.log(SAN.getAirportCapacity()); // show there is a default capacity set

//* land planes at different airports
LHR.landPlane(boeing);
LHR.landPlane(airbus);
LHR.landPlane(boeing); // error [already at airport]
GLA.landPlane(concord);
SAN.landPlane(private);
AMS.landPlane(douglas); // error [invalid input]
AMS.landPlane(boeing);
AMS.landPlane(concord); // error [airport full]

//* takeoff planes from different airports
GLA.takeoffPlane(concord);
GLA.takeoffPlane(boeing); // error [plane does not exist]
LHR.takeoffPlane(boeing);
LHR.takeoffPlane(douglas);

//* find the planes at an airport
console.log(LHR.groundedPlanes);
console.log(SAN.groundedPlanes);