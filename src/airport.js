class Airport {
    constructor(capacity = 10) {
        this.capacity = capacity;
    }

    landPlane(plane) {
        plane.status = 'landed';
    }
}

module.exports = Airport;
