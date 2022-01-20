import * as planeTests from "./plane.spec.js";
import * as airportTests from "./airport.spec.js";
import * as weatherTests from "./weather.spec.js";

// Plane class tests
console.log("------------PLANE CLASS TESTS-------------------")
for (let property in planeTests) {
    planeTests[property]();
}
// p.planeInitialisesWithNameTest();
// p.planeInitialisesWithAirportProperty();
// p.planeInitialisesWithDefaultAirportProperty();


// Airport class tests
console.log("------------AIRPORT CLASS TESTS-------------------")
for (let property in airportTests) {
    airportTests[property]();
}
// a.airportInitialisesWithNameTest();
// a.airportInitialisesWithCapacityTest();
// a.airportInitialisesWithDefaultCapacityTest();
// a.airportCapacityCanBeChanged();
// a.airportInitialisesWithListOfPlanes();
// a.airportCanBeInitialisedWithCustomListOfPlanes();
// a.airportCannotLandPlaneWhenFull();
// a.airportCanLandPlaneWhenNotFull();
// a.airportCanLetPlaneTakeOff();
// a.airportCannotTakeOffPlaneNotInAirport();
// a.airportCannotLandPlaneAlreadyInAirport();
// a.airportLandPlaneReturnsPlaneObject();
// a.airportTakeOffPlaneReturnsPlaneObject();
// a.airportLandPlaneChangesPlaneAirportProperty();
// a.airportTakeOffPlaneChangesPlaneAirportProperty();

// Weather class tests
console.log("------------WEATHER CLASS TESTS-------------------")
for (let property in weatherTests) {
    weatherTests[property]();
}