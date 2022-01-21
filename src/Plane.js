class Plane {
    constructor(id, airport) {
        console.log(airport)
        this.id = id;
        this.airport = airport.airportId;
    }
    getId() {
        return this.id
    }
    getAirport() {
        return this.airport;
    }
}

module.exports = Plane;