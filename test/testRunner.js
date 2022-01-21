const assertEquals = require('./testFramework');
const {checkIfAirAnPortLandedPlane, checkIfAirportCapacityOverridden, checkIfAnAirportLandedPlaneWhenFull, checkIfPlaneTakenOffAndConfirmedWithAirport, checkIfIntegerEnteredForAirportCapacity}=require('./airport.test');

checkIfAnAirPortLandedPlane();
checkIfAirportCapacityOverridden();
checkIfAnAirportLandedPlaneWhenFull();
checkIfPlaneTakenOffAndConfirmedWithAirport();
checkIfIntegerEnteredForAirportCapacity();