const Airport = require('./Airport');
const Plane = require('./Plane.js');

const airport1 = new Airport();
const airport2 = new Airport(3000);

plane1 = new Plane('Booeing101')
plane2 = new Plane('Lufthansa')
airport1.landPlane(plane1);
airport2.landPlane(plane2);
airport1.landPlane(new Plane('Booeing201'));

console.log(airport1.airportPlanes);
console.log(airport2.airportPlanes);


console.log(airport1.airportCapacity);
console.log(airport2.airportCapacity);

console.log(airport1.airportPlanes.length)


airport1.takeOff(plane1);
console.log(airport1.airportPlanes.length);

airport1.takeOff(plane2);
console.log(airport1.airportPlanes.length);


