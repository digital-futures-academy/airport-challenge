const { checkAnyPlaneNameInputNotStringIsUndefined,
    checkNewPlaneLocationIsInSkyInitially,
    checkCanGetAPlaneName,
    checkNewAirportHasEmptyArrayOfLandedPlanes,
    checkAnyAirportNameInputNotStringIsUndefined,
    checkAirportNameHasToBeThreeLetterInput,
    checkCanGetAirportName,
    checkPlaneInstructedToLandIsAtAirport,
    checkLandedPlaneLocationIsSetToSpecifiedAirport,
    checkDefaultAirportCapacityIs5,
    checkDefaultAirportCapacityCanBeOverRidden,
    checkCanCountNumberOfPlanesAtAirport,
    checkLandingIsPreventedWithAirportAtFullCapacity,
    checkPlaneCanTakeOffFromAirportAndIsNoLongerThere,
    checkPlaneLocationAfterTakingOffIsSky,
    checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport,
    checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport,
    checkStormyFunctionProducesABooleanValue,
    checkPlaneCannotTakeOffWhenStormy } = require('./testSpecs.js')


checkAnyPlaneNameInputNotStringIsUndefined();
checkNewPlaneLocationIsInSkyInitially();
checkCanGetAPlaneName();
checkNewAirportHasEmptyArrayOfLandedPlanes();
checkAnyAirportNameInputNotStringIsUndefined();
checkAirportNameHasToBeThreeLetterInput();
checkCanGetAirportName();
checkPlaneInstructedToLandIsAtAirport();
checkLandedPlaneLocationIsSetToSpecifiedAirport();
checkDefaultAirportCapacityIs5();
checkDefaultAirportCapacityCanBeOverRidden();
checkCanCountNumberOfPlanesAtAirport();
checkLandingIsPreventedWithAirportAtFullCapacity();
checkPlaneCanTakeOffFromAirportAndIsNoLongerThere();
checkPlaneLocationAfterTakingOffIsSky();
checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport();
checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport();
checkStormyFunctionProducesABooleanValue();
checkPlaneCannotTakeOffWhenStormy();