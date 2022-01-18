import {
    planeInitialisesWithNameTest,
    planeInitialisesWithAirportProperty,
    planeInitialisesWithDefaultAirportProperty
} from "./plane.spec.js"

import {
    airportInitialisesWithNameTest,
    airportInitialisesWithCapacityTest,
    airportInitialisesWithDefaultCapacityTest
} from "./airport.spec.js"

// Plane class tests
planeInitialisesWithNameTest();
planeInitialisesWithAirportProperty();
planeInitialisesWithDefaultAirportProperty();


// Airport class tests
airportInitialisesWithNameTest();
airportInitialisesWithCapacityTest();
airportInitialisesWithDefaultCapacityTest();