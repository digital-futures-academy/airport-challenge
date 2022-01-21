const { checkCanLandPlane, checkCanOverrideAirportCapacity, 
    checkCannotLandWhenAirportFull, 
    checkCanTakeOff,
    checkVoidPlaneNotFound,
    } = require("./airport.spec");


checkCanLandPlane(); 
checkCanOverrideAirportCapacity(); 
checkCannotLandWhenAirportFull(); 
checkCanTakeOff(); 
checkVoidPlaneNotFound();
