const {
    testAirportAvailable,
    testAirportUnavailable,
    testPlaneLandsAirportUnavailable,
    testPlaneLandsAirportAvailable,
    testPlaneLandedIntoAirport,
    testAddMoreThanOnePlane,
    testDefaultCapacityAirport,
    testChangeCapacity
} = require('./spec/Airport.spec');

testAirportAvailable();
testAirportUnavailable();
testPlaneLandsAirportUnavailable();
testPlaneLandsAirportAvailable();
testPlaneLandedIntoAirport();
testAddMoreThanOnePlane();
testDefaultCapacityAirport();
testChangeCapacity();