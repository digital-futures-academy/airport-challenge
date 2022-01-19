const {
    testAirportAvailable,
    testAirportUnavailable,
    testPlaneLandsAirportUnavailable,
    testPlaneLandsAirportAvailable
} = require('./spec/Airport.spec');

testAirportAvailable();
testAirportUnavailable();
testPlaneLandsAirportUnavailable();
testPlaneLandsAirportAvailable();