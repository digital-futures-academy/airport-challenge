const Airport = require('./Airport');
const Plane = require('./Plane');
const Weather = require('./Weather');

console.log('Land a plane at an Airport');
const airport = new Airport(new Weather('clear'));
const plane = new Plane('plane1');
airport.landPlane(plane);
console.log(`${airport.getLandedPlanes()[0].getId()} has landed at the airport`);
console.log(`Plane status ${airport.getLandedPlanes()[0].getLanded()}`);

console.log('');
console.log('');

console.log('Increase Max Capacity at Airport by 5');
console.log(`Max capacity at airport is ${airport.getMaxAirportCapacity()}`);
airport.increaseAirportCapacity(5);
console.log(`Max capacity at airport is now ${airport.getMaxAirportCapacity()}`);

console.log('');
console.log('');

const airportFull = new Airport(new Weather('clear'));
const planeArray = [
    new Plane('ba1'),
    new Plane('ba2'),
    new Plane('ba3'),
    new Plane('ba4'),
    new Plane('ba5'),
];

for (const plane of planeArray) {
    airportFull.landPlane(plane);
}

console.log(`is the airport full?: ${airportFull.isAirportFull()}`);
console.log(`Number of planes at Airport: ${airportFull.getLandedPlanes().length}`);
console.log(`Max capacity at airport ${airportFull.getMaxAirportCapacity()}`);

console.log('');
console.log('');

console.log('Plane takes off from airportFull and returns a confirmation');
const planeToTakeOff = new Plane('ba4');
console.log(`number of planes at airportFull: ${airportFull.getLandedPlanes().length}`);
console.log(airportFull.takeoffPlane(planeToTakeOff));
console.log(`number of planes now at airportFull: ${airportFull.getLandedPlanes().length}`);

console.log('');
console.log('');

console.log('Attempting to land a plane that is already at airport');
const planeToLand = new Plane('plane1');
console.log(`Number of planes at airport: ${airport.getLandedPlanes().length}`);
airport.landPlane(planeToLand);
console.log(`Number of planes now at airport: ${airport.getLandedPlanes().length}`);

console.log('');
console.log('');

console.log('Attempting to let a plane take off that is not at the airport');
const planeNotAtAirport = new Plane('plane99');
console.log(`Number of planes at airport: ${airport.getLandedPlanes().length}`);
airport.takeoffPlane(planeNotAtAirport);
console.log(`Number of planes now at airport: ${airport.getLandedPlanes().length}`);
