
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

const airport = new Airport();
const plane1 = new Plane();
const plane2 = new Plane();
const plane3 = new Plane();
const plane4 = new Plane();

airport.landPlane(plane1);
console.log(airport.airportPlanes.length);

console.log(airport.airportCapacity);

airport.airportCapacity = 3;
console.log(airport.airportCapacity);

airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
console.log(airport.airportPlanes.length);

airport.takeOffPlane(plane2);
console.log(airport.airportPlanes.length);

