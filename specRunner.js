const airportSpec = require(`./spec/airport.spec.js`);
const planeSpec = require("./spec/plane.spec.js");

//Airport methods
airportSpec.testNewAirport();
airportSpec.testNewAirportIsEmpty();
airportSpec.testOverridingPlaneCapacityToNewAirport();
airportSpec.testLandingPlane();
airportSpec.testLandingPlaneInFullAirport();
airportSpec.testPlaneTakingOff();

//Plane methods
planeSpec.testNewPlane();
