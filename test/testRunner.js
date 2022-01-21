const assertEquals = require('./testFramework');
const {checkIfAirAnPortLandedPlane, checkIfAirportCapacityOverridden, checkIfAnAirportLandedPlaneWhenFull, checkIfPlaneTakenOffAndConfirmedWithAirport, checkIfIntegerEnteredForAirportCapacity, checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded}=require('./airport.test');

checkIfAnAirPortLandedPlane();
checkIfAirportCapacityOverridden();
checkIfAnAirportLandedPlaneWhenFull();
checkIfPlaneTakenOffAndConfirmedWithAirport();
checkIfIntegerEnteredForAirportCapacity();
checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded();