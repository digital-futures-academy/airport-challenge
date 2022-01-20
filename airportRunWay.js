const { Airport } = require('./src/airport.js');
const { Plane } = require('./src/plane.js');
const { WeatherReport } = require('./src/weather.js')


//// RUN PROGRAMME HERE:






//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//// EXAMPLE PROGRAMME:

// JFK set to have capacity of 3 planes 

const AirportJFK = new Airport('JFK', 3);
const AirportLHR = new Airport('LHR'); //Has a default capacity of 5 planes

// Can view a list of all airports in existence

console.log(Airport.listOfAllAirports);

const PlaneA111 = new Plane('A111');
const PlaneB222 = new Plane('B222');
const PlaneC333 = new Plane('C333');
const PlaneD444 = new Plane('D444');
const PlaneE555 = new Plane('E555');

// Can view a list of all planes in existence

console.log(Plane.listOfAllPlanes);

// Current location of all planes is in the sky initially

PlaneA111.getLocation();
PlaneB222.getLocation();
PlaneC333.getLocation();
PlaneD444.getLocation();
PlaneE555.getLocation();

// Need to check the weather report when instructing planes to land or take off  

const weatherReport1 = new WeatherReport();

// Input data must be a valid Plane instance and a valid WeatherReport instance 

AirportJFK.landPlane(10);
AirportJFK.landPlane(PlaneA111);

// Landing planes at airport

AirportJFK.landPlane(PlaneA111, weatherReport1);

const weatherReport2 = new WeatherReport();
weatherReport2.stormyWeather = false // Making weather not stormy for demonstration purposes 

AirportJFK.landPlane(PlaneB222, weatherReport2);
AirportJFK.landPlane(PlaneC333, weatherReport2);
AirportJFK.landPlane(PlaneD444, weatherReport2);

// Once a plane has landed its location changes to the airport it is at

PlaneB222.getLocation();
PlaneC333.getLocation();

// Can check how many and what planes have landed and are located at the airport

AirportJFK.getNumberOfPlanesAtAirport();
AirportJFK.getLandedPlanesList();

// Once a plane has taken off from an airport we can confirm if it at the airport or not

AirportJFK.planeTakeOff(PlaneB222, weatherReport2);
AirportJFK.getLandedPlanesList(); // PlaneB222 is not longer there 
AirportJFK.confirmPlaneHasLeft(PlaneB222);
AirportJFK.confirmPlaneHasLeft(PlaneC333);

// There is a notification is we try to let planes take-off which are not at an airport

AirportJFK.planeTakeOff(PlaneE555, weatherReport2);

// There is also a notification is we ask a plane to land at an airport and it is already there

AirportJFK.landPlane(PlaneC333, weatherReport2);

// When the weather is storm a plane is not able to land or take off

const weatherReport3 = new WeatherReport();
weatherReport3.stormyWeather = true; // Forcing weather to be stormy for demonstration purposes 

AirportJFK.landPlane(PlaneE555, weatherReport3);
AirportJFK.planeTakeOff(PlaneD444, weatherReport3);