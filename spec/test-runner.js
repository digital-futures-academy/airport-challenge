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
a.airportCanBeInitialisedWithCustomListOfPlanes();
a.airportCannotLandPlaneWhenFull();
a.airportCanLandPlaneWhenNotFull();
a.airportCanLetPlaneTakeOff();
a.airportCannotTakeOffPlaneNotInAirport();