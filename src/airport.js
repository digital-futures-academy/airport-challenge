class Airport {

    constructor(airportCapacity = 1) {
        this.airportCapacity = airportCapacity;
        this.planeList = [];
    }

    landPlane = plane => {
        this.planeList.push(plane);
    };
}

module.exports = Airport;