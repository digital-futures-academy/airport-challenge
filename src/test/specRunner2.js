const Plane = require('./src/plane');
const Airport = require('./src/airport');

const airport1 = new Airport();

const plane1 = new Plane('Boeing 787');
const plane2 = new Plane('Lockheed SR-71');
const plane3 = new Plane('Cirrus SR22');
const plane4 = new Plane('Learjet 23');
const plane5 = new Plane('Lockheed C-130');

airport1.landPlane(plane1);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.landPlane(plane2);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.landPlane(plane3);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.landPlane(plane4);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.landPlane(plane5);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');

console.log('--------- takeoffs -----------');

airport1.takeOffPlane(plane1);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.takeOffPlane(plane2);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.takeOffPlane(plane3);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.takeOffPlane(plane4);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');
airport1.takeOffPlane(plane5);
console.log('------ AIRPORT STATE ------');
console.log(airport1);
console.log('----------');