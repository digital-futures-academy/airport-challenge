class Airport {

    planesInAirport;

    constructor() {

        this.planesInAirport = [];

    }

    add = plane => {

        this.planesInAirport.push(plane);

    }

}

module.exports = Airport;
