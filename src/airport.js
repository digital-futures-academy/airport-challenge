class Airport {
    constructor() {
        this.planes = [];
        this.capacity = 4;
    }

    land(plane) {
        this.planes.push(plane);
        return this.planes;
    }
}

module.exports = Airport;