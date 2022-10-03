class Airport {

    planesInAirport;
    planeCapacity;

    constructor(capacity = 3) {

        this.planesInAirport = [];
        this.planeCapacity = capacity;

    }

    add = plane => {
        this.planesInAirport.push(plane);

    }

}

module.exports = Airport;
