const { Airport } = require(`../src/Airport.js`);
const { Plane } = require(`../src/Plane.js`);

class Helper {

    static checkInputIsAPlaneObject(input) {
        return input instanceof Plane
        // if (input instanceof Plane) {
        //     checkPlaneFlightInput(input)
        // }
    }

}

plane1 = new Plane();
plane2 = 'hi'
plane3 = new Plane('A1', true)
plane4 = new Plane(null, true)
plane5 = new Plane('B2', 2)


console.log(checkInputIsAPlaneObject(plane1))
console.log(checkInputIsAPlaneObject(plane2))
console.log(checkInputIsAPlaneObject(plane3))
console.log(Plane.checkInputIsAPlaneObject(plane4))
console.log('-------------------')
console.log(checkPlaneIDInput(plane1))
console.log(checkPlaneIDInput(plane2))
console.log(checkPlaneIDInput(plane3))
console.log(checkPlaneIDInput(plane4))
console.log('-------------------')
console.log(checkPlaneFlightInput(plane1))
console.log(checkPlaneFlightInput(plane2))
console.log(checkPlaneFlightInput(plane3))
console.log(checkPlaneFlightInput(plane4))


airport = new Airport();

airport.setWeatherSafeForAction(Airport.weatherGenerator())
console.log(airport);

function checkInputIsAPlaneObject(input) {
    return input instanceof Plane
    // if (input instanceof Plane) {
    //     checkPlaneFlightInput(input)
    // }
}

function checkPlaneIDInput(input) {
    if (input?.planeID && typeof input.planeID === 'string') {
        return true
    }
}

function checkPlaneFlightInput(input) {
    if (input?.inFlight && typeof input.inFlight === 'boolean') {
        return true
    }



}