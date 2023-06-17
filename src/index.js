const { Airport } = require(`../src/Airport.js`);
const { Plane } = require(`../src/Plane.js`);



plane1 = new Plane();
plane2 = 'hi'
plane3 = new Plane('A1', true)
plane4 = new Plane(null, true)
plane5 = new Plane('B2', 2)


console.log(Plane.checkInputIsAPlaneObject(plane1))
console.log(Plane.checkInputIsAPlaneObject(plane2))
console.log(Plane.checkInputIsAPlaneObject(plane3))
console.log(Plane.checkInputIsAPlaneObject(plane4))
console.log('-------------------')
console.log(Plane.checkPlaneIDInput(plane1))
console.log(Plane.checkPlaneIDInput(plane2))
console.log(Plane.checkPlaneIDInput(plane3))
console.log(Plane.checkPlaneIDInput(plane4))
console.log('-------------------')
console.log(Plane.checkPlaneFlightInput(plane1))
console.log(Plane.checkPlaneFlightInput(plane2))
console.log(Plane.checkPlaneFlightInput(plane3))
console.log(Plane.checkPlaneFlightInput(plane4))


airport = new Airport();

airport.setWeatherSafeForAction(Airport.weatherGenerator())
console.log(airport);



