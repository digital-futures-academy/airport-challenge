// const { Plane } = require("./plane");
const Weather = require("./Weather.js");

class Airport {
    constructor() {
        this.planes = [];
        this.capacity = 4;
        this.weather = new Weather();
    }

    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }

    airportFull() {
        if (this.planes.length < this.capacity) return false;
        else return true;
    }

    land(plane) {
        if (this.planes.includes(plane)) {
            (console.log(`Plane already at the airport, plane cannot land.`));
        } else if (this.airportFull()) {
            (console.log(`Airport is full, plane can not land.`));
        } else if (this.weather = `stormy`) {
            console.log(`Weather is stormy, plane cannot land.`);
        } else {
            this.planes.push(plane);
        }
    }

    takeOff(plane) {
        if (!this.planes.includes(plane)) {
            console.log(`Plane not at the airport, cannot take off.`);
        } else if (this.weather = `stormy`) {
            console.log(`Weather is stormy, plane cannot take off.`);
        } else {
            this.planes.pop(plane)
        }
    }
}

module.exports = Airport;