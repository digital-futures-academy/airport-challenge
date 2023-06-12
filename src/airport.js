const { Plane } = require("./plane");

class Airport {
    constructor() {
        this.planes = [];
        this.capacity = 4;
    }

    land(plane) {
        if (!this.airportFull()) {
            this.planes.push(plane);
        } else {
            (console.log(`“Airport is full, do not land”`));
        }
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity
    }

    airportFull() {
        if (this.planes.length < this.capacity) return false;
        else return true;
    }

    takeOff(plane) {
        if (this.planes.includes(plane)) {
            this.planes.pop(plane);
        } else {
            console.log(`“Plane not at the airport, cannot take off.”`);
        }

    }
}

module.exports = Airport;