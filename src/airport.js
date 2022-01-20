//contain the actual class

class Airport {
    constructor() {
        this.plane = []; // enable adding planes to Airport
        this.capacity = 2; // setting the default capacity - can be overridden later
        this.stormy = false // default is no storm
    }

    changeCapacity(value) {
        this.capacity = value;
    }

    countPlane() {
        return this.plane.length;
    }

    changeWeather() {
        if ((Math.floor(Math.random() * 6) + 1) === 1) {
            this.stormy = true;
        }
    }

    landPlaneToAirport(value) {
        if (this.plane.length < this.capacity) {
            this.plane.push(value);
        } else {
            return new Error(`Can't land planes at this airport as it's full.`)
        }

    }

    takeOffPlaneFromAirport(value) {
        if (this.plane.includes(value) && this.stormy === false) {
            this.plane = this.plane.filter(function(f) { return f !== value })
        } else {
            return new Error(`Can't land planes at the moment.`)
        }
    }

}

module.exports = { Airport };