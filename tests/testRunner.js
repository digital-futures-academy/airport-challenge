const { checkAnyPlaneNameInputNotStringIsUndefined,
    checkNewPlaneLocationIsInSkyInitially,
    checkCanGetAPlaneName,
    checkNewAirportHasEmptyArrayOfLandedPlanes,
    checkAnyAirportNameInputNotStringIsUndefined,
    checkAirportNameHasToBeThreeLetterInput,
    checkCanGetAirportName,
    checkPlaneInstructedToLandIsAtAirport,
    checkLandedPlaneLocationIsSetToSpecifiedAirport } = require('./testSpecs.js')


checkAnyPlaneNameInputNotStringIsUndefined();
checkNewPlaneLocationIsInSkyInitially();
checkCanGetAPlaneName();
checkNewAirportHasEmptyArrayOfLandedPlanes();
checkAnyAirportNameInputNotStringIsUndefined();
checkAirportNameHasToBeThreeLetterInput();
checkCanGetAirportName();
checkPlaneInstructedToLandIsAtAirport();
checkLandedPlaneLocationIsSetToSpecifiedAirport();