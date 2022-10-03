class Airport {

    planesInAirport;
    planeCapacity;

    constructor(capacity = 3) {

        this.planeCapacity = capacity;
        this.planesInAirport = new Array(capacity);

    }

    landPlane = plane => {

        this.planesInAirport[0] = (plane);
        return false;

    }

    isFull = () => {

    }

}

module.exports = Airport;
