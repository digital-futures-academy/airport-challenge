const airportTests = require(`./tests/airportTests.spec`);

const planeTests = require(`./tests/planeTests.spec`);

const weatherTests = require(`./tests/weatherTests.spec`);

//Airport tests

airportTests.testNumbOfPlanesIsZero();
airportTests.testOnePlaneLanded();
airportTests.testDefaultCapacityAtAirport();
airportTests.testChangeCapacityAtAirport();
airportTests.testPreventLanding();
airportTests.testPlaneMustBeAnObject();
airportTests.testTakeOffRemovesPlaneFromArray();
airportTests.testTakeOffUsesObjectPlanesOnly();
airportTests.testIfPlaneAlreadyAtAirportDontLandAgain();
airportTests.testPlaneLandedSomewhereElseThenCantLand();
airportTests.testCantRemovePlaneNotAtAirport();


//Plane Tests
planeTests.testPlaneIsFlyingByDefault();
planeTests.testPlaneIsLandedIfSupplied();
planeTests.testPlaneHasStringName();
planeTests.testErrorIfNullPlaneName();
planeTests.testErrorIfNameIsNonString();
planeTests.testChangingPlaneLandingStatus();


//Weather Tests
weatherTests.testRandomlyGenerateWeather();