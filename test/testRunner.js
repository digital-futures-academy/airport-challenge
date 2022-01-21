// const assertEquals = require('./testFramework');
// const {checkIfAirAnPortLandedPlane, checkIfAirportCapacityOverridden, checkIfAnAirportLandedPlaneWhenFull, checkIfPlaneTakenOffAndConfirmedWithAirport, checkIfIntegerEnteredForAirportCapacity, checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded}=require('./airport.test');
const {checkAirplaneObjectIsObject, checkAirplaneNameIsOfTypeString, checkInAirStatusIsOfTypeBoolean} = require('./airplane.test');

checkAirplaneObjectIsObject();
checkAirplaneNameIsOfTypeString();
checkInAirStatusIsOfTypeBoolean();
// checkIfAnAirPortLandedPlane();
// checkIfAirportCapacityOverridden();
// checkIfAnAirportLandedPlaneWhenFull();
// checkIfPlaneTakenOffAndConfirmedWithAirport();
// checkIfIntegerEnteredForAirportCapacity();
// checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded();