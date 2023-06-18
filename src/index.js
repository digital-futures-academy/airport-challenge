const Airport = require('./Airport.js');
const Plane = require('./Plane.js');
const Weather = require('./Weather.js');

// Created Airport Glasgow & landed 3 planes.
console.log('=====================================================');
console.log('Created Airport Glasgow & landed 3 planes.');

const Glasgow = new Airport();
const plane1 = new Plane();
const plane2 = new Plane();
const plane3 = new Plane();

Glasgow.landPlane(plane1);
Glasgow.landPlane(plane2);
Glasgow.landPlane(plane3);

console.log('=====================================================');
console.log('Glasgow');
console.log(Glasgow.airportPlanes);
console.log('');

//Plane 2 left Glasgow Airport. 
console.log('=====================================================');
console.log('Plane 2 left Glasgow Airport.');

Glasgow.takeoffPlane(plane2);

console.log('=====================================================');
console.log('Glasgow');
console.log(Glasgow.airportPlanes);
console.log('');


// Planes 4, 5, and 6 were able to land but 7 was unable due to the airport capacity.
console.log('=====================================================');
console.log('Planes 4, 5, and 6 were able to land but 7 was unable due to the airport capacity.');

const plane4 = new Plane;
const plane5 = new Plane;
const plane6 = new Plane;
const plane7 = new Plane;

Glasgow.landPlane(plane4);
Glasgow.landPlane(plane5);
Glasgow.landPlane(plane6);
Glasgow.landPlane(plane7);

console.log('=====================================================');
console.log('Glasgow');
console.log(Glasgow); 
console.log('');

// The capacity of the airport was increased to 6, this then allowed for plane 7 to land.
console.log('=====================================================');
console.log('The capacity of the airport was increased to 6, this then allowed for plane 7 to land.');

Glasgow.overrideCapacity(6);
Glasgow.landPlane(plane7);

console.log('=====================================================');
console.log('Glasgow');
console.log(Glasgow);
console.log(''); 

// The ID was checked for plane 7 to ensure it was the correct plane.
console.log('=====================================================');
console.log('The ID was checked for plane 7 to ensure it was the correct plane.');

console.log('=====================================================');
console.log('Plane 7 ID:');
console.log(plane7.getId());
console.log('');

// A plane tried to takeoff during a storm.
console.log('=====================================================');
console.log('A plane tried to takeoff during a storm.');

Glasgow.setWeather('Stormy');

console.log('=====================================================');
console.log(Glasgow.takeoffPlane(plane3));
console.log('');

// A plane tried to land during the storm.
console.log('=====================================================');
console.log('A plane tried to land during the storm.');

const plane8 = new Plane();
Glasgow.overrideCapacity(10);

console.log('=====================================================');
console.log(Glasgow.landPlane(plane8));
console.log('');

// This plane diverted to Edinburgh airport along with any other planes that were on course to Glasgow.
console.log('=====================================================');
console.log('This plane diverted to Edinburgh airport along with any other planes that were on course to Glasgow.');

const Edinburgh = new Airport();
const plane9 = new Plane();
const plane10 = new Plane();

Edinburgh.landPlane(plane8);
Edinburgh.landPlane(plane9);
Edinburgh.landPlane(plane10);

console.log('=====================================================');
console.log('Edinburgh');
console.log(Edinburgh.airportPlanes);
console.log('');

// Some more things happened
console.log('=====================================================');
console.log('Some more things happened');
console.log('=====================================================');

Glasgow.generateWeather();

console.log('Glasgow weather:');
console.log(Glasgow.currentWeather);
console.log('');

Edinburgh.generateWeather();

console.log('Edinburgh weather:');
console.log(Edinburgh.currentWeather);
console.log('');

console.log('Glasgow planes:');
console.log(Glasgow.airportPlanes);
console.log('');

console.log('Edinburgh planes:');
console.log(Edinburgh.airportPlanes);
console.log('');

Glasgow.takeoffPlane(plane1);
Glasgow.takeoffPlane(plane4);
Glasgow.takeoffPlane(plane5);
Glasgow.takeoffPlane(plane7);

let Heathrow = new Airport();
Heathrow.generateWeather();

console.log('Heathrow weather:');
console.log(Heathrow.currentWeather);
console.log('');

Edinburgh.takeoffPlane(plane8);
Edinburgh.takeoffPlane(plane10);

Heathrow.landPlane(plane1);
Heathrow.landPlane(plane4);
Heathrow.landPlane(plane5);
Heathrow.landPlane(plane7);
Heathrow.landPlane(plane8);
Heathrow.landPlane(plane10);

console.log('Glasgow planes:');
console.log(Glasgow.airportPlanes);
console.log('');

console.log('Edinburgh planes:');
console.log(Edinburgh.airportPlanes);
console.log('');

console.log('Heathrow planes:');
console.log(Heathrow.airportPlanes);
console.log('');