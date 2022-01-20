const { Airport } = require('../src/airport');
const { Plane } = require('../src/plane');
const { WeatherReport } = require('../src/weather.js')


//// DEVELOPMENT PROGRAMME 

const testPlane1 = new Plane('plane1');
const testPlane2 = new Plane('plane2');
const testPlane3 = new Plane('plane3');

const testAirport = new Airport('TST', 1);

const weatherReport1 = new WeatherReport();
const weatherReport2 = new WeatherReport()

console.log(testAirport.getLandedPlanesList());
console.log(testAirport.getNumberOfPlanesAtAirport());

testAirport.landPlane(10);
testAirport.landPlane(testPlane2);
testAirport.landPlane(testPlane3);

console.log(testAirport.getLandedPlanesList());
console.log(testAirport.getNumberOfPlanesAtAirport());

console.log(testAirport.getLandedPlanesList().indexOf('plane2'));

testAirport.planeTakeOff(testPlane3, weatherReport1);
testAirport.planeTakeOff(testPlane2);

console.log(testAirport.getLandedPlanesList());
console.log(testAirport.getNumberOfPlanesAtAirport());