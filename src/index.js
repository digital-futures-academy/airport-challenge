const Airport = require("./airport.js");
const Plane = require("./plane.js");

const plane1 = new Plane(`plane1`);
const plane2 = new Plane(`plane2`);
const plane3 = new Plane(`plane3`);
const plane4 = `plane4`
const plane5 = new Plane(`plane5`);
const myAirport = new Airport();
myAirport.airportCapacity = 3;

//planes do land
console.log(myAirport.landPlane(plane1));
console.log(myAirport.landPlane(plane2));
console.log(myAirport.landPlane(plane3));
//planes don't land if the airport is at capacity
console.log(myAirport.landPlane(plane5));
//planes do take off
console.log(myAirport.orderTakeOff(plane2));
console.log(myAirport.orderTakeOff(plane3));
//only if they were at the airport
console.log(myAirport.orderTakeOff(plane3));
//planes already at the airport can't land again
console.log(myAirport.landPlane(plane1));
//unidentified planes don't land
console.log(myAirport.landPlane(plane4));