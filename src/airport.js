const plane = require(`../src/Plane`);
class Airport {

    planes;
    airportCapacity;

    constructor() {
        this.planes = [];
        this.airportCapacity = 5;

    }
    getNumberOfPlane() {
        return this.planes.length;
    }

    landPlane(planeToAdd) {
        this.planes.push(planeToAdd);
    }

    increaseCapacity(capacity) {
        return this.airportCapacity += capacity;
    }
}

module.exports = Airport;