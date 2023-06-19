const plane = require(`../src/Plane`);
class Airport {

    planes;
    airportCapacity;

    constructor() {
        this.planes = [];
        this.airportCapacity = 1;

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

    isAirportFull() {
        return this.planes.length === this.airportCapacity;
    }
}

module.exports = Airport;