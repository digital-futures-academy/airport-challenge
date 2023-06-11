class Airport {
    constructor() {
        this.planes = [];
    }

    land(plane) {
        this.planes.push(plane);
        return this.planes;
    }
}

module.exports = Airport;