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
        return this.planes.length >= this.capacity;
    }

    land(plane) {
        if (this.planes.includes(plane)) {
            console.log(`${plane} already at the airport, cannot land.`);
        } else if (this.airportFull()) {
            console.log(`Airport is full, ${plane} can not land.`);
        } else if (this.weather.description === `Stormy`) {
            console.log(`Weather is stormy, ${plane} cannot land.`);
        } else {
            this.planes.push(plane);
        }
    }

    takeOff(plane) {
        if (!this.planes.includes(plane)) {
            console.log(`${plane} not at the airport, cannot take off.`);
        } else if (this.weather.description === `Stormy`) {
            console.log(`Weather is stormy, ${plane} cannot take off.`);
        } else {
            this.planes.splice(this.planes.indexOf(plane), 1);
        }
    }
}

module.exports = Airport;