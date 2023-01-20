const Airport = require ("../src/airport.js")
const Plane = require ("../src/plane.js")

//Initialisation of the planes
const plane1 = new Plane(`Plane-1`)
const plane2 = new Plane(`Plane-2`)
const plane3 = new Plane(`Plane-3`)
const plane4 = new Plane(`Plane-4`)

//Initialisation of the airport
const airport = new Airport(Plane, 3, [plane1,plane2,plane3]);

//plane4 is not able to land because airport is full
console.log(airport.landPlane(plane4))

//Capacity is increased to 5 planes
airport.overrideCapacity(5)

//Plane 4 asks to land and is given permission
console.log(airport.landPlane(plane4))

//Plane 1 is getting ready for take off
console.log(airport.takeOff(plane1))

//Plane 1 has successfully taken off
console.log(airport.checkTakeOff(plane1))

//Plane 1 cannot take off once it has left the airport
console.log(airport.takeOff(plane1))

//Plane 2 cannot land because it is already in the airport
console.log(airport.landPlane(plane2))







