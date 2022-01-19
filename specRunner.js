const airportTests = require(`./tests/airportTests`);

const planeTests = require(`./tests/planeTests.spec`);

//Airport tests

airportTests.testNumbOfPlanesIsZero();
airportTests.testOnePlaneLanded();
airportTests.testPlaneIsOnlyString();
airportTests.testNoNonStringPlanes();
airportTests.testDefaultCapacityAtAirport();
airportTests.testChangeCapacityAtAirport();
airportTests.testPreventLanding();


//Plane Tests
planeTests.testPlaneIsFlyingByDefault();
planeTests.testPlaneIsLandedIfSupplied();
