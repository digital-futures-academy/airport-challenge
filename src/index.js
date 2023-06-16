const Airport = require('./Airport');
const Plane = require('./Plane');
const Weather = require('./Weather');

const airport = new Airport(new Weather('clear'));
const airportFull = new Airport(new Weather('clear'));
const plane1 = new Plane('plane1');
const plane99 = new Plane('plane99');
const planeBa4 = new Plane('ba4');

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

console.log('Land a plane at an Airport');
airport.landPlane(plane1);
console.log(`${airport.getLandedPlanes()[0].getId()} has landed at the airport`);
console.log(`Plane status ${airport.getLandedPlanes()[0].getLanded()}`);

console.log('');
console.log('=================================================================');
console.log('');

console.log('Increase Max Capacity at Airport by 5');
console.log(`Max capacity at airport is ${airport.getMaxAirportCapacity()}`);
airport.increaseAirportCapacity(5);
console.log(`Max capacity at airport is now ${airport.getMaxAirportCapacity()}`);


console.log('');
console.log('=================================================================');
console.log('');


console.log(`is the airport full?: ${airportFull.isAirportFull()}`);
console.log(`Number of planes at Airport: ${airportFull.getLandedPlanes().length}`);
console.log(`Max capacity at airport ${airportFull.getMaxAirportCapacity()}`);


console.log('');
console.log('=================================================================');
console.log('');


console.log('Plane ba4 takes off from airportFull and returns a confirmation');
console.log(`number of planes at airportFull: ${airportFull.getLandedPlanes().length}`);
const planesAtAirport = airportFull.getLandedPlanes();
console.log('planes currently at airportFull: ');
for (let plane of planesAtAirport) { console.log(plane.getId()); }
console.log('');
console.log(airportFull.takeoffPlane(planeBa4));
console.log(`number of planes now at airportFull: ${airportFull.getLandedPlanes().length}`);
const planesAtAirportAfterBa4TookOff = airportFull.getLandedPlanes();
console.log('planes at airport after ba4 took off');
for (let plane of planesAtAirportAfterBa4TookOff) { console.log(plane.getId()); }


console.log('');
console.log('=================================================================');
console.log('');


console.log('Attempting to land plane1 that is already at airport');
console.log(`Number of planes at airport: ${airport.getLandedPlanes().length}`);
console.log(`Is this plane already at the airport?: ${airport.checkPlaneAtAirport(plane1.getId())}`);
airport.landPlane(plane1);
console.log(`Number of planes now at airport: ${airport.getLandedPlanes().length}`);


console.log('');
console.log('=================================================================');
console.log('');


console.log('Attempting to let plane99 take off that is not at the airport');
console.log(`Number of planes at airport: ${airport.getLandedPlanes().length}`);
console.log(`Is this plane already at the airport?: ${airport.checkPlaneAtAirport(plane99.getId())}`);
airport.takeoffPlane(plane99);
console.log(`Number of planes now at airport: ${airport.getLandedPlanes().length}`);


console.log('');
console.log('=================================================================');
console.log('');


console.log('Prevent plane from taking off when the weather is \'stormy\'');
airport.setWeather('stormy');
console.log(`Weather Conditions at the airport is currently stormy: ${airport.isWeatherStormy()}`);
console.log(`plane currently at airport: ${airport.getLandedPlanes()[0].getId()}`);
console.log('plane1 attempts to take off');
airport.takeoffPlane(plane1);
console.log(`plane currently at airport: ${airport.getLandedPlanes()[0].getId()}`);
console.log('plane1 was unable to take off due to the stormy conditions');


console.log('');
console.log('=================================================================');
console.log('');


console.log('Prevent plane from landing  when the weather is \'stormy\'');
console.log(`Weather Conditions at the airport is currently stormy: ${airport.isWeatherStormy()}`);
console.log(`plane currently at airport: ${airport.getLandedPlanes()[0].getId()}`);
console.log('plane99 attempts to land');
airport.takeoffPlane(plane99);
console.log(`plane currently at airport: ${airport.getLandedPlanes()[0].getId()}`);
console.log('plane99 was unable to land due to the stormy conditions');


console.log('');
console.log('=================================================================');
console.log('');


console.log('Planes that have landed must be at an airport');
console.log(`plane1 is currently at airport and has a landed status of: ${plane1.getLanded()}`);
console.log(`planeBa4 took off from airportFull and currently has a landed status of: ${planeBa4.getLanded()}`);


console.log('');
console.log('=================================================================');
console.log('');
