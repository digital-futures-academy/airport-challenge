const Airport = require("./airport.js");
const Plane = require("./plane.js");

const plane1 = new Plane({ id: `plane1` });
const plane2 = new Plane({ id: `plane2` });
const plane3 = new Plane({ id: `plane3` });
const myAirport = new Airport();

myAirport.landPlane(plane1);
myAirport.landPlane(plane2);
console.log(`Number of planes at the airport: ${myAirport.planesStanding.length}`);

myAirport.orderTakeOff(plane2);
console.log(`Number of planes staying at the airport after take off: ${myAirport.planesStanding.length}`);

myAirport.landPlane(plane1);
myAirport.orderTakeOff(plane2);