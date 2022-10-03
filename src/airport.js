class Airport {

    planesInAirport;
    planeCapacity;

    constructor(capacity = 3) {

        this.planeCapacity = capacity;
        this.planesInAirport = new Array(capacity);

    }

    add = plane => {

        this.planesInAirport[0] = (plane);

    }

}

module.exports = Airport;
