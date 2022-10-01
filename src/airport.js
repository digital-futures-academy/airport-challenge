class Airport {

    constructor(airportCapacity = 1) {
        this.airportCapacity = airportCapacity;
        this.planeList = [];
    }

    landPlane = plane => {
        this.planeList.push(plane);
    };

    changeCapacity = newCapacity => {
        this.airportCapacity = newCapacity;
    }
}

module.exports = Airport;