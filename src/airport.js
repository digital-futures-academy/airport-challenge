class Airport {

    constructor(airportCapacity = 1) {
        this.airportCapacity = airportCapacity;
        this.planeList = [];
    }

    landPlane = plane => {
        if (!this.isAirportfull()) {
            this.planeList.push(plane);
        }
    };

    changeCapacity = newCapacity => {
        this.airportCapacity = newCapacity;
    }

    isAirportfull = () => {
        return (this.airportCapacity === this.planeList.length) ? true : false;
    }
}

module.exports = Airport;