const { Airport } = require(`../src/Airport.js`);
const { Plane } = require(`../src/Plane.js`);


checkPlane1 = new Plane();
checkPlane2 = 'hi'
checkPlane3 = new Plane('A1', true)
checkPlane4 = new Plane(null, true)
checkPlane5 = new Plane('B2', 2)

planeArray = [checkPlane1, checkPlane2, checkPlane3, checkPlane4, checkPlane5]

planeArray.forEach(isThisAnInstanceOfPlane);
console.log('------------------------');
planeArray.forEach(constructorPlaneID);
console.log('------------------------');
planeArray.forEach(constructorInFlight);
console.log('------------------------');


realPlane1 = new Plane('A1', true)
realPlane2 = new Plane(null, true)
realPlane3 = new Plane('A1', true)
realPlane4 = new Plane(null, true)

// airport = new Airport();

// airport.setWeatherSafeForAction(Airport.weatherGenerator())
// console.log(airport);


function isThisAnInstanceOfPlane(input) {
    console.log('Input is a instance of Plane object: ' + Plane.checkInputIsAPlaneObject(input))
}

function constructorPlaneID(input) {
    console.log('Input has a planeID property: ' + Plane.checkPlaneIDInput(input))
}

function constructorInFlight(input) {
    console.log('Input has a inFlight property: ' + Plane.checkPlaneFlightInput(input))
}