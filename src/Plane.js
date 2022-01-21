class Plane {
    constructor(id, airport) {
        this.id = id;
        this.airport = airport.id;
    }
    getId() {
        return this.id
    }
    getAirport() {
        return this.airport;
    }
}

module.exports = Plane;