class Airport {
    constructor() {
        this.defaultCapacity = 300;
        this.currentCapacity = 200;
        this.location = {
            airport: "landed",
            notInAirport: "left airport",
        };
    }
    isAirportFull() {
        if (this.currentCapacity >= this.defaultCapacity) {
            return true;
        } else {
            return false;
        }
    }
    changeDefaultCapacity(capacity) {
        this.defaultCapacity = capacity;
        return this.defaultCapacity;
    }

    landPlane(plane) {
        if (this.isAirportFull()) {
            return "sorry cannot land plane";
        } else {
            return "you are free to land" + plane;
        }
    }
    takeOff() {
        return this.location["notInAirport"];
    }
}

module.exports = Airport;
