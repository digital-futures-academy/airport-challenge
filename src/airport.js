const Plane = require('./Plane');

class Airport {

    planesAtAirport = [];

    constructor(airportCapacity = 10) {
        this.airportCapacity = airportCapacity;
    }


    landPlane(plane, weather) {
        if (weather === `sunny` && plane instanceof Plane) {
            if (!this.isFull() && !this.isPlaneAtAirport(plane.getID())) {
                this.planesAtAirport.push(plane)
            }
        }
    }

    planeTakeOff(plane, weather) {
        if (this.isPlaneAtAirport(plane.getID()) && weather === `sunny`) {
            const index = this.planesAtAirport.indexOf(plane);
            if (index > -1) {
                this.planesAtAirport.splice(index, 1);
            }
        }
    }

    isPlaneAtAirport(planeID) {
        if (this.planesAtAirport.length == 0) {
            return false;
        }

        for (let i = 0; i < this.planesAtAirport.length; i++) {
            if (this.planesAtAirport[i].getID() === planeID) {
                return true;
            }
        } return false;
    }


    increaseCapacity = capacity => {
        this.airportCapacity += capacity;
    }

    decreaseCapacity = capacity => {
        this.airportCapacity -= capacity;
    }

    isFull() {
        return this.planesAtAirport.length >= this.airportCapacity ? true : false;
    }
}


module.exports = Airport;
