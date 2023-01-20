const Airport = require("./Airport");
const Plane = require("./Plane");

const airportGatwick = new Airport();

airportGatwick.addPlane(new Plane(`planeInGatwick`));
console.log(airportGatwick.airportPlanes);


