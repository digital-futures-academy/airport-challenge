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
    checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport } = require('./testSpecs.js')


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