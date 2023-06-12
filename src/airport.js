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
        this.planes.pop(plane);
    }
}

module.exports = Airport;