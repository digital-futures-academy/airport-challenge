const airportSpec = require(`./spec/airport.spec.js`);
const planeSpec = require("./spec/plane.spec.js");

//Airport methods
airportSpec.testNewAirport();
airportSpec.testNewAirportIsEmpty();
airportSpec.testOveridingPlaneCapacityToNewAirport();

//Plane methods
planeSpec.testNewPlane();
planeSpec.testLandingPlane();
