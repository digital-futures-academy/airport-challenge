const Weather = require ("./Weather.cjs");
const Plane = require ("./Plane.cjs");
const Airport = require ("./Airport.cjs");

let airport, plane, weather;

plane = new Plane();
airport = new Airport();
weather = new Weather();
// land a plane with id G-XLEE in the airport
console.log('Make an airport with name LHR, with no initial planes and report');
airport = new Airport('LHR');
console.log(airport.getLandedPlanes());
