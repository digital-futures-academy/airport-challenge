const Airport = require(`./Airport`);
const Plane = require(`./Plane`);

const airportEDI = new Airport();
const airportGLA = new Airport();

//Test landPlane method
airportEDI.landPlane(new Plane(`Ryanair`));
airportGLA.landPlane(new Plane(`British Airways`));
airportEDI.landPlane(new Plane(`British Airways`));

console.log(airportEDI.planesAtAirport);
console.log(airportGLA.planesAtAirport);