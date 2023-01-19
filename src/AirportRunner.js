const Airport = require('./Airport');
const Plane = require('./Plane.js');

const airport1 = new Airport();
const airport2 = new Airport(3000);


airport1.landPlane(new Plane('Booeing101'));
airport2.landPlane(new Plane('Lufthansa'));
airport1.landPlane(new Plane('Booeing201'));

console.log(airport1.airportPlanes);
console.log(airport2.airportPlanes);


console.log(airport1.airportCapacity);
console.log(airport2.airportCapacity);

console.log(airport1.airportPlanes.length)
