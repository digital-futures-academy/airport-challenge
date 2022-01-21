// const assertEquals = require('./testFramework');
// const {checkIfAirAnPortLandedPlane, checkIfAirportCapacityOverridden, checkIfAnAirportLandedPlaneWhenFull, checkIfPlaneTakenOffAndConfirmedWithAirport, checkIfIntegerEnteredForAirportCapacity, checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded}=require('./airport.test');
const {checkAirplaneObjectIsObject, checkAirplaneNameIsOfTypeString} = require('./airplane.test');

checkAirplaneObjectIsObject();
checkAirplaneNameIsOfTypeString();

// checkIfAnAirPortLandedPlane();
// checkIfAirportCapacityOverridden();
// checkIfAnAirportLandedPlaneWhenFull();
// checkIfPlaneTakenOffAndConfirmedWithAirport();
// checkIfIntegerEnteredForAirportCapacity();
// checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded();