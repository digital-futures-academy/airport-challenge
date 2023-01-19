class Plane {
    id;
    airport;

    constructor(id) {
        this.id = id;
    }

    getAirport() {
        return this.airport;
    }

    setAirport(airportName) {
        airportName ? this.airport = airportName : this.airport = `In the air`;
    }
}

module.exports = Plane;
