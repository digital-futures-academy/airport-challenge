const { Plane } = require("./plane");

class Airport {
    constructor() {
        this.planes = [];
        this.capacity = 4;
    }

    land(plane) {
        if (!this.airportFull() && !this.planes.includes(plane)) {
            this.planes.push(plane);
        } else if (this.airportFull() && !this.planes.includes(plane)) {
            (console.log(`Airport is full, do not land`));
        } else if (!this.airportFull() && this.planes.includes(plane)) {
            (console.log(`Plane already at the airport, cannot land`));
        } else {
            console.log(`Airport is full and the plane already here, cannot land.`);

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
            console.log(`Plane not at the airport, cannot take off.`);
        }

    }
}

module.exports = Airport;