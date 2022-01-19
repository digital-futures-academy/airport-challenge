// import {
//     planeInitialisesWithNameTest,
//     planeInitialisesWithAirportProperty,
//     planeInitialisesWithDefaultAirportProperty
// } from "./plane.spec.js"

// import {
//     airportInitialisesWithNameTest,
//     airportInitialisesWithCapacityTest,
//     airportInitialisesWithDefaultCapacityTest,
//     airportCapacityCanBeChanged,
//     airportInitialisesWithListOfPlanes
// } from "./airport.spec.js"

import * as p from "./plane.spec.js";
import * as a from "./airport.spec.js";

// Plane class tests
p.planeInitialisesWithNameTest();
p.planeInitialisesWithAirportProperty();
p.planeInitialisesWithDefaultAirportProperty();


// Airport class tests
a.airportInitialisesWithNameTest();
a.airportInitialisesWithCapacityTest();
a.airportInitialisesWithDefaultCapacityTest();
a.airportCapacityCanBeChanged();
a.airportInitialisesWithListOfPlanes();