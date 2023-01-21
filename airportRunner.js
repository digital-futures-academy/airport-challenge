const Airport = require("./src/Airport");
const Plane = require("./src/Plane");

const airportGatwick = new Airport();

airportGatwick.addPlane(new Plane(`planeInGatwick`));
console.log(airportGatwick.airportPlanes);


