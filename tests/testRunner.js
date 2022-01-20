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
    checkLandingIsPreventedWithAirportAtFullCapacity,
    checkPlaneCanTakeOffFromAirportAndIsNoLongerThere,
    checkPlaneLocationAfterTakingOffIsSky,
    checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport,
    checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport,
    checkStormyFunctionProducesABooleanValue,
    checkPlaneCannotTakeOffWhenStormy,
    checkPlaneCannotLandWhenWeatherIsStormy,
    checkCanCountNumberOfPlanesAtAirport } = require('./testSpecs.js')


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
checkLandingIsPreventedWithAirportAtFullCapacity();
checkPlaneCanTakeOffFromAirportAndIsNoLongerThere();
checkPlaneLocationAfterTakingOffIsSky();
checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport();
checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport();
checkStormyFunctionProducesABooleanValue();
checkPlaneCannotTakeOffWhenStormy();
checkPlaneCannotLandWhenWeatherIsStormy();
checkCanCountNumberOfPlanesAtAirport();