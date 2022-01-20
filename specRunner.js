const {
    testAirportAvailable,
    testAirportUnavailable,
    testPlaneLandsAirportUnavailable,
    testPlaneLandsAirportAvailable,
    testPlaneLandedIntoAirport,
    testAddMoreThanOnePlane,
    testDefaultCapacityAirport,
    testChangeCapacity,
    leavingAirport,
    testStormyLand,
    testStormyLeave
} = require('./spec/Airport.spec');

testAirportAvailable();
testAirportUnavailable();
testPlaneLandsAirportUnavailable();
testPlaneLandsAirportAvailable();
testPlaneLandedIntoAirport();
testAddMoreThanOnePlane();
testDefaultCapacityAirport();
testChangeCapacity();
leavingAirport();
testStormyLand();
testStormyLeave();