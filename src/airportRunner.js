const Airport = require("./Airport.js");
const Plane = require("./Plane.js");

const myairport = new Airport();
const airport2 = new Airport();
const airport3 = new Airport();
const plane1 = new Plane(1);
const plane2 = new Plane(2);
const plane3 = new Plane(3);
const plane4 = new Plane(4);
const plane5 = new Plane(5);
myairport.addPlane(plane1);
myairport.addPlane(plane2);
myairport.addPlane(plane3);
myairport.addPlane(plane4);
myairport.addPlane(plane5);
// airport1.addPlane(`second new in airport 1`);
// airport2.addPlane(`new in airport 2`);

// console.log(airport1.airportPlanes);
// console.log(airport2.airportPlanes);
// console.log(airport1);

// console.log(airport3);

// airport3.setCapacity(4);

console.log(myairport.addPlane(plane4));
console.log(myairport.addPlane(plane5));
