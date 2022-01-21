const assertEquals = require('./testFramework');
const {checkIfAirAnPortLandedPlane, checkIfAirportCapacityOverridden, checkIfAnAirportLandedPlaneWhenFull, checkIfPlaneTakenOffAndConfirmedWithAirport}=require('./airport.test');

checkIfAnAirPortLandedPlane();
checkIfAirportCapacityOverridden();
checkIfAnAirportLandedPlaneWhenFull();
checkIfPlaneTakenOffAndConfirmedWithAirport();