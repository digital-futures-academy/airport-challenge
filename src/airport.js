const plane = require(`../src/Plane`);
class Airport {

    planes;
    airportCapacity;
    plane2;

    constructor() {
        this.planes = [];
        this.airportCapacity = 1;
        this.plane2 = 2;

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

    instructPlaneTakeOff() {
        this.planes.pop();
    }

    landPlaneAgain(plane) {
        if (this.planes.includes(plane)) {
            return false;
        } else {
            this.landPlane(plane);
        }
    }

}

module.exports = Airport;