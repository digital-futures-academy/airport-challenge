
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

const airport = new Airport();
const plane1 = new Plane('Plane1');
const plane2 = new Plane('Plane2');
const plane3 = new Plane('Plane3');
const plane4 = new Plane('Plane4');

airport.landPlane(plane1);
console.log('Plane1 landed, no. of planes in airport:', airport.airportPlanes.length);

console.log('Default airport capacity:', airport.airportCapacity);

airport.airportCapacity = 3;
console.log('New airport capacity:', airport.airportCapacity);

airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
console.log('landPlane called 4 times, planes in airport:', airport.airportPlanes);

airport.takeOffPlane(plane2);
console.log('Take off Plane2, planes in airport:', airport.airportPlanes);

airport.takeOffPlane(plane4);
console.log('Take off Plane4 (not at airport), planes in airport:', airport.airportPlanes);

airport.landPlane(plane3);
console.log('Land Plane3 (already at airport), planes in airport:', airport.airportPlanes);





