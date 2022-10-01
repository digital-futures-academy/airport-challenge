class Airport {

    constructor(airportCapacity = 1) {
        this.airportCapacity = airportCapacity;
        this.planeList = [];
    }

    landPlane = plane => {
        if (!this.isAirportFull() && !this.isPlaneInAirport(plane)) {
            this.planeList.push(plane);
        }
    }

    takeOff = plane => {
        if (this.isPlaneInAirport(plane)) {
            this.planeList.pop(plane);
        }
    }

    changeCapacity = newCapacity => {
        this.airportCapacity = newCapacity;
    }

    isAirportFull = () => {
        return (this.airportCapacity === this.planeList.length) ? true : false;
    }

    isPlaneInAirport = plane => {
        return this.planeList.includes(plane);
    }
}

module.exports = Airport;