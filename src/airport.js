class Airport {

    planesInAirport;
    planeCapacity;

    constructor(capacity = 3) {

        this.planesInAirport = new Array(3);
        this.planeCapacity = capacity;

    }

    add = plane => {

        this.planesInAirport[0] = (plane);

    }

}

module.exports = Airport;
