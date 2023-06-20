const Weather = require ("./Weather.cjs");
const Plane = require ("./Plane.cjs");
const Airport = require ("./Airport.cjs");

let airport, plane, weather;

plane = new Plane();
airport = new Airport();
weather = new Weather();


console.log('Make an airport with name LHR, with no initial planes and report');
airport = new Airport('LHR');
console.log(airport.getLandedPlanes());

console.log('Make an airport with name LHR, land a plane with id G-XLEE and a status of departed in the airport and report');
airport = new Airport('LHR');
plane = new Plane('G-XLEE', 'departed');
airport.landPlane(plane)
console.log(airport.getLandedPlanes());

console.log('Make an airport with name LHR, land a plane with id G-XLEE and a status of landed in the airport and report');
airport = new Airport('LHR');
plane = new Plane('G-XLEE', 'landed');
airport.landPlane(plane)
console.log(airport.getLandedPlanes());