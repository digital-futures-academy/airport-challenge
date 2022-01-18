const airportSpec = require(`./spec/airport.spec.js`);
const planeSpec = require("./spec/plane.spec.js");

//Airport methods
airportSpec.testNewAirport();
airportSpec.testNewAirportIsEmpty();
airportSpec.testOverridingPlaneCapacityToNewAirport();
airportSpec.testLandingPlane();
airportSpec.testLandingPlaneInFullAirport();
airportSpec.testPlaneTakingOff();
airportSpec.testPlaneTakingOffInEmptyAirport();
airportSpec.testLandingNotAPlane();
airportSpec.testNotAPlaneTakingOffInEmptyAirport();
airportSpec.testNotAPlaneTakingOff();
airportSpec.testSetWeatherUsingInt();
airportSpec.testSetWeatherUsingValidStr();
airportSpec.testSetWeatherUsingInvalidInt();
airportSpec.testSetWeatherUsingInvalidStr();
//Plane methods
planeSpec.testNewPlane();
