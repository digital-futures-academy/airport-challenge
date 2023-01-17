const Airport = require('./Airport');
const Plane = require('./Plane.js');

const airport1 = new Airport();
const airport2 = new Airport();

airport1.addPlane('Booeing101');
airport2.addPlane('Lufthansa');
airport1.addPlane('Booeing201');

console.log(airport1.airportPlanes);
console.log(airport2.airportPlanes);