const {checkIfAnAirportLandedPlane, checkIfAirportCapacityOverridden, checkIfAnAirportLandedPlaneWhenFull, checkIfPlaneTakenOffAndConfirmedWithAirport, checkIfIntegerEnteredForAirportCapacity, checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded}=require('./airport.test');
const {checkAirplaneObjectIsObject, checkAirplaneNameIsOfTypeString, checkInAirStatusIsOfTypeBoolean}=require('./airplane.test')

//airport tests
checkIfAnAirportLandedPlane();
checkIfAirportCapacityOverridden();
checkIfAnAirportLandedPlaneWhenFull();
checkIfPlaneTakenOffAndConfirmedWithAirport();
checkIfIntegerEnteredForAirportCapacity();
checkIfPlaneCanLandAtAnotherAirportIfAlreadyLanded();



//airplane tests
checkAirplaneObjectIsObject();
checkAirplaneNameIsOfTypeString();
checkInAirStatusIsOfTypeBoolean();